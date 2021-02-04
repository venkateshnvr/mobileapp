
import React, { Component } from "react";
import { View, Text, StyleSheet, AppRegistry, StatusBar } from "react-native";
import { Table, Row, Rows } from "react-native-table-component";
import Constants from "expo-constants";
import { ipConfig } from "../ipconfig"; // server connection local and production
// import DatePicker from "react-native-datepicker";
// import DatePicker from "react-native-date-picker";
// import { Picker, DatePicker } from "react-native-wheel-pick";
var moment = require("moment");
import { Calendar } from "react-native-calendars";

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";
import DateTimePicker from '@react-native-community/datetimepicker';

const isIos = Platform.OS === "ios";
export default class Timings extends Component {
  constructor(props) {
    super(props);
    this.state = {
      HeadTable: [],
      DataTable: [],
      Date: "",
      day: "",
      maxDate: [],
      minDate: "",
      allDates: []
    };
  }

  static navigationOptions = {
    header: null
  };

  selectedDate() {
    console.log(".............", Date);
    // var DateFormat = moment(date).format("YYYY-MM-DD");
    // var split = date.split("-");
    // let setdate =
    //   parseInt(split[0]) + "-" + parseInt(split[1]) + "-" + parseInt(split[2]);
    // let dates = new Date(setdate);
    // console.log("converString", dates);
    // // console.log(date);
    // let daylist = [
    //   "Sunday",
    //   "Monday",
    //   "Tuesday",
    //   "Wednesday ",
    //   "Thursday",
    //   "Friday",
    //   "Saturday"
    // ];
    // // let day = daylist[date.getDay()];
    // this.state.allDates.map(data => {
    //   if (data.date === date) {
    //     let list = [];
    //     for (let i = 0; i < data.table.length; i++) {
    //       // array inside create inside new array example: [[1,2,2],[123,45]]
    //       let nextList = [];
    //       for (let dataObject in data.table[i]) {
    //         nextList.push(data.table[i][dataObject]);
    //       }
    //       list.push(nextList);
    //     }
    //     // console.log("list", list);
    //     // id == index add 1, 2, 3
    //     for (let i = 0; i < list.length; i++) {
    //       list[i][0] = i + 1;
    //     }

    //     this.setState({
    //       HeadTable: ["S.no", "Start", "End", "Availability"],
    //       DataTable: list,
    //       Date: date,
    //       day: daylist[0]
    //     });
    //   }
    // });
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
          maxDate: SortMaxMin[0].split("-"),
          minDate: SortMaxMin[SortMaxMin.length - 1].date.split("-"),
          HeadTable: ["S.no", "Start", "End", "Timing"],
          DataTable: list,
          Date: setdate,
          day: day,
          allDates: data
        });
      });
  }
  render() {
    const state = this.state;
    let maxDate0 = 2021
    console.log('maxDate0', state.maxDate)
    let maxDate1 = 2
    let maxDate2 = 1
    let minDate0 = 2021
    let minDate1 = 1
    let minDate2 = 1
    // let minDate0 = parseInt(state.minDate[0]);
    // let minDate1 = parseInt(state.minDate[1]);
    // let minDate2 = parseInt(state.minDate[2]);parseInt(state.maxDate[1]);parseInt(state.maxDate[0]);parseInt(state.maxDate[2]);
    // let max = new Date(maxDate0, maxDate1, maxDate2)
    // console.log('max', max)
    // console.log('maxDate',typeof(parseInt(state.maxDate[0])))
    // let minDate = new Date(parseInt());
    console.log("minDate.............", state.maxDate);
    // let [month, date, year]    = 
    // console.log('month, date, year', month, date, year)
    return (
      <View style={styles.view}>
        <View style={styles.container}>
          <View style={styles.viewText}>
            <Text style={styles.text}>Day : {state.day}</Text>
            <Text style={styles.text}>Date : {state.Date}</Text>
          </View>
          <View style={styles.margin}>
            {/* <DatePicker
              style={{ width: 200 }}
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
                  // marginLeft: 36
                  // backgroundColor: "orange"
                }
                // ... You can check the source to find the other keys.
              }}
              // disabled
              onDateChange={date => {
                this.selectedDate(date); // update the date
              }}
              androidMode="spinner"
            /> */}
            <DateTimePicker
              // showIcon
              display="spinner"
              testID="dateTimePicker"
              // date={new Date()}
              value={new Date()}
              mode="date"
              is24Hour={true}
              onChange={
                date => {
                  console.log(date);
                }
                // this.selectedDate // update the date
              }
              // maximumDate={Date.parse(state.maxDate)}
              // minimumDate={new Date(, 1, 1)}
              showIcon={true}
              maximumDate={
                // new Date(state.maxDate)
                new Date(
                  maxDate0,
                  maxDate1,
                  maxDate2
              )
              }
              minimumDate={
                // new Date(state.minDate)
                new Date(
                  minDate0,
                  minDate1,
                  minDate2
              )
              }
            />
            {/* <DatePicker 
            date={new Date()}
            mode={'date'}
            onDateChange={date => {
              this.selectedDate(date); // update the date
            }}
            default={'iosClone', 'nativeAndroid'} 
            is24hourSource="locale"
            />*/}
            {/* <DatePicker
              style={{
                backgroundColor: "white",
                height: 215,
                width: isIos ? 300 : undefined
              }}
              // android not support width
              onDateChange={date => {}}
              minimumDate={new Date("2000-01-01")}
              maximumDate={new Date("2050-12-31")}
            /> */}
            {/* <Calendar
              currentMonth={new Date()}
              maxDate={state.maxDate}
              minDate={state.minDate}
              showControls={true} 
              onDayPress={day => {
                console.log("selected day", day);
              }}
              // hideExtraDays={true}
            /> */}
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
        <Text style={styles.noData}>
          Avalible data till {this.state.maxDate}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
    paddingTop: Constants.statusBarHeight
  },
  container: {
    // flex: 1,
    // flexDirection: "row",
    // flexWrap: "wrap",
    // paddingTop: 5
    paddingTop: Constants.statusBarHeight
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
    // flex:1,
    margin: 10,
    textAlign: "center",
    fontSize: 18
  },
  view: {
    backgroundColor: "white",
    flex: 1
  },
  text: {
    fontSize: 20,
    // fontWeight: "normal",
    margin: 5,
    color: "#fff"
  },
  viewText: {
    height: hp("8%"),
    flexDirection: "row",
    backgroundColor: "#ea9a06",
    justifyContent: "center",
    alignItems: "center"
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
