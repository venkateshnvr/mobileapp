import React, { Component } from "react";
import { View, Text, StyleSheet, AppRegistry, StatusBar } from "react-native";
import { Table, Row, Rows } from "react-native-table-component";
import Constants from "expo-constants";
import { ipConfig } from "../ipconfig"; // server connection local and production
import DatePicker from "react-native-datepicker";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";
import { black } from "ansi-colors";
// import DateTimePicker from '@react-native-community/datetimepicker';

export default class Timings extends Component {
  constructor(props) {
    super(props);
    this.state = {
      HeadTable: [],
      DataTable: [],
      Date: "",
      day: "",
      maxDate: "",
      minDate: "",
      allDates: []
    };
  }

  static navigationOptions = {
    header: null
  };

  selectedDate(date) {
    // let setdate =
    //   date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate();
    let daylist = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday ",
      "Thursday",
      "Friday",
      "Saturday"
    ];
    // let day = daylist[date.getDay()];
    this.state.allDates.map(data => {
      if (data.date === date) {
        let list = [];
        for (let i = 0; i < data.table.length; i++) {
          // array inside create inside new array example: [[1,2,2],[123,45]]
          let nextList = [];
          for (let dataObject in data.table[i]) {
            nextList.push(data.table[i][dataObject]);
          }
          list.push(nextList);
        }
        console.log("list",list)
        // id == index add 1, 2, 3
        for (let i = 0; i < list.length; i++) {
          list[i][0] = i + 1;
        }

        this.setState({
          HeadTable: ["S.no", "Start", "End", "Availability"],
          DataTable: list,
          // Date: date,
          // day: day,
        });
      }
    });
  }

  componentDidMount() {
    // taking the today date and send date  to the server nodejs
    let date = new Date();
    let setdate =
      date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate(); // removeing hours
    let daylist = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday ",
      "Thursday",
      "Friday",
      "Saturday"
    ]; // today day
    let day = daylist[date.getDay()];
    fetch(`${ipConfig}/tabels/tabel`)
      .then(res => res.json())
      .then(data => {
        let SortMaxMin = data.sort((a, b) => {
          return a.date < b.date;
        });
        let dataList = [];
        data.map(data => {
          if (data.date === setdate) {
            dataList.push(data);
          }
        });
        let list = [];
        for (let i = 0; i < dataList[0].table.length; i++) {
          // array inside create inside new array example: [[1,2,2],[123,45]]
          let nextList = [];
          for (let data in dataList[0].table[i]) {
            nextList.push(dataList[0].table[i][data]);
          }
          list.push(nextList);
        }

        // id == index add 1, 2, 3
        for (let i = 0; i < list.length; i++) {
          list[i][0] = i + 1;
        }

        this.setState({
          maxDate: SortMaxMin[0].date,
          minDate: SortMaxMin[SortMaxMin.length - 1].date,
          HeadTable: ["S.no", "Start", "End", "Availability"],
          DataTable: list,
          Date: setdate,
          day: day,
          allDates: data
        });
      });
  }
  render() {
    const state = this.state;
    return (
      <View style={styles.view}>
        <View style={styles.container}>
          {/* {this.state.DataTable.length !== 0 ? ( */}
          <View>
            <View style={styles.viewText}>
              <Text style={styles.text}>Today Day: {this.state.day}</Text>
              <Text style={styles.text}>Today Date: {this.state.Date}</Text>
            </View>

            <View style={styles.margin}>
              <DatePicker
                style={{ width: 200 }}
                // date={this.state.date}
                mode="date"
                placeholder="select date"
                format="YYYY-M-D"
                minDate={this.state.minDate}
                maxDate={this.state.maxDate}
                confirmBtnText="Confirm"
                cancelBtnText="Cancel"
                customStyles={{
                  dateIcon: {
                    position: "absolute",
                    left: 0,
                    top: 4,
                    marginLeft: 10
                  },
                  dateInput: {
                    // marginLeft: 36,
                    // backgroundColor: "orange"
                  },
                  dateTouchBody: {
                    backgroundColor: "orange"
                  }
                  // ... You can check the source to find the other keys.
                }}
                // disabled 
                onDateChange={date => {
                  this.selectedDate(date); // update the date
                }}
                customStyles={{}}
              />
            </View>
            <Table borderStyle={{ borderWidth: 1, borderColor: "black" }}>
              <Row
                data={state.HeadTable}
                style={styles.HeadStyle}
                textStyle={styles.TableText}
              />
              <Rows data={state.DataTable} textStyle={styles.TableText} />
            </Table>
          </View>
          <Text style={styles.noData}>Avalible data till {this.state.maxDate}</Text>
          {/* // ) : (
          //   )} */}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
    backgroundColor: "#FFF",
    paddingTop: Constants.statusBarHeight
    // marginTop: Platform.OS == "android" ? 130 : 0
  },
  container: {
    // flex: 1,
    // flexDirection: "row",
    // flexWrap: "wrap",
    // paddingTop: 5
    // paddingTop: Constants.statusBarHeight
  },
  margin: {
    margin: 10,
    width: "100%",
    textAlign: "left"
  },
  HeadStyle: {
    height: 50
  },
  TableText: {
    margin: 10,
    alignItems: "center",
    fontSize: 18
  },
  view: {
    backgroundColor: "white",
    flex: 1
  },
  text: {
    fontSize: 20,
    margin: 5
  },
  viewText: {
    height: hp("10%"),
    flexDirection: "row",
    paddingTop: Constants.statusBarHeight,
  },
  noData: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 20,
    textAlignVertical: "center",
    paddingTop: Constants.statusBarHeight
  }
});

AppRegistry.registerComponent("Timings", () => Timings);