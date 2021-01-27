import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import {
  Table,
  TableWrapper,
  Row,
  Rows,
  Col,
  Cols,
  Cell
} from "react-native-table-component";
import Calendar from 'react-native-calendar-datepicker';
import Moment from 'moment';
// import { getConsoleOutput } from "@jest/console";

class Timings extends Component {
  constructor(props) {
    super(props);
    this.state = {
      HeadTable: [],
      DataTable: [],
      Date: "",
      day: "",
      date: ""
    };
  }

  componentDidMount() {
    // takeing the today date and send date  to the server nodejs
    let date = new Date();
    let setdate =
      date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate();
    let daylist = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday ",
      "Thursday",
      "Friday",
      "Saturday"
    ];
    let day = daylist[date.getDay()];
    fetch(`http://10.10.3.94:8001/tabels/tabel/${setdate}`)
      .then(res => res.json())
      .then(data => {
        // createing tabel data
        let list = [];
        for (let i = 0; i < data[0].table.length; i++) {
          // array inside create inside new array example: [[1,2,2],[123,45]]
          let list1 = [];
          for (let datai in data[0].table[i]) {
            list1.push(data[0].table[i][datai]);
          }
          list.push(list1);
        }

        // id === index
        for (let i = 0; i < list.length; i++) {
          list[i][0] = i + 1;
        }
        this.setState({
          HeadTable: ["S.no", "Start", "End","Availability"],
          DataTable: list,
          Date: setdate,
          day: day
        });
      });
  }
  render() {
    const state = this.state;
    console.log(state.date)
    return (
      <View style={styles.view}>
        {this.state.DataTable.length === 0 ? (
          <Text style={styles.noData}>TODAY IS HOLIDAY</Text>
        ) : (
          <View>
            <View style={styles.viewText}>
              <Text style={styles.text}>Day: {this.state.day}</Text>
              <Text style={styles.text}>Date: {this.state.Date}</Text>
            </View>
              <Calendar
                // selected={this.state.date}
                minDate={'2021-05-10'}
                maxDate={'2021-05-30'}
                onDayPress={day => {
                  console.log('selected day', day);
                }}
                onMonthChange={month => {
                  console.log('month changed', month);
                }}
              />
            <Table borderStyle={{ borderWidth: 1, borderColor: "black" }}>
              <Row
                data={state.HeadTable}
                style={styles.HeadStyle}
                textStyle={styles.TableText}
              />
              <Rows data={state.DataTable} textStyle={styles.TableText} />
            </Table>
          </View>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 18,
    paddingTop: 35
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
    flex: 1,
  },
  text: {
    fontSize: 20,
    margin: 5
  },
  viewText: {
    flexDirection: "row"
  },
  noData: {
    textAlign: "center",
    fontWeight: 'bold',
    fontSize: 20,
    // alignItems: 'center',
    textAlignVertical: "center",
  }
});

export default Timings;
