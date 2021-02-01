"use strict";
import React, { Component } from "react";
import {
  Alert,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Button,
  TextInput,
  AppRegistry
} from "react-native";
import Constants from "expo-constants";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";
import { black } from "ansi-colors";

export default class Help extends Component {
  static navigationOptions = {
    header: null
  };
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      message: ""
    };
    this.onLogin = this.onLogin.bind(this);
  }

  onLogin() {
    if (
      this.state.name !== "" &&
      this.state.message !== "" &&
      this.state.email !== ""
    ) {
      const endpoint = __DEV__
        ? "http://10.10.3.94:8001"
        : "https://museumserver.herokuapp.com";
      fetch(`${endpoint}/feedback/post`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          name: this.state.name,
          email: this.state.email,
          message: this.state.message
        })
      })
        .then(res => res.json())
        .then(res => console.log(res))
        .catch(err => console.log(err));
    } else {
      Alert.alert("Please fill all deatils");
    }
    this.setState({
      name: "",
      email: "",
      message: ""
    });
    Alert.alert("Thanks For Your Time");
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.contact}>FEEDBACK</Text>
        <TextInput
          value={this.state.name}
          onChangeText={name => this.setState({ name })}
          placeholder={"Name"}
          style={styles.input}
          placeholderTextColor="#000"
        />
        <TextInput
          value={this.state.email}
          onChangeText={email => this.setState({ email })}
          placeholder={"Email"}
          style={styles.input}
          placeholderTextColor="#000"
        />
        <TextInput
          multiline={true}
          value={this.state.message}
          placeholderTextColor="#000"
          style={styles.message}
          onChangeText={message => this.setState({ message })}
          placeholder={"How was the world first robot museum.?"}
          editable
          underlineColorAndroid={"transparent"}
        />
        {/* <TouchableOpacity onPress={() => this.onLogin()} style={styles.submit}>
          <Text style={styles.text}>Submit</Text>
        </TouchableOpacity> */}
        <View
          style={{
            marginHorizontal: 40,
            paddingHorizontal: 10,
            paddingTop: 10,
            marginVertical: 10
          }}
          backgroundColor="##0be881"
        >
          <Button onPress={() => this.onLogin()} title="Submit" />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: Constants.statusBarHeight,
    // margin: wp('1%')
  },
  input: {
    // flex:1,
    width: wp("98%"),
    height: 50,
    padding: 5,
    borderWidth: 1,
    // borderBottom: 1,
    // borderEndWidth: 1,
    borderColor: "black",
    borderRadius: 10,
    margin: wp('1%'),
    // marginHorizontal: 2,
    marginRight:2,
    // marginTop: 5,
    fontSize: 18
  },
  submit: {
    height: 40,
    backgroundColor: "#a6a6a7",
    borderRadius: 10,
    marginTop: 20
  },
  text: {
    fontSize: 20,
    padding: 10,
    textAlign: "center"
  },
  message: {
    width: wp("98%"),
    height: 100,
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 10,
    fontSize: 18,
    padding: 10,
    justifyContent: "flex-start",
    // borderBottomWidth: 1,
    // paddingTop: 1
    marginTop: 5,
    margin: wp('1%'),
    textAlignVertical: "top"
  },
  button: {
    marginHorizontal: 40,
    paddingHorizontal: 10,
    paddingTop: 10,
    // marginVertical: 20.
    fontSize: 18
  },
  developmentModeText: {
    marginBottom: 20,
    color: "rgba(0,0,0,0.4)",
    fontSize: 14,
    lineHeight: 19,
    textAlign: "center"
  },
  contact: {
    height: hp('8%'),
    fontWeight: "bold",
    backgroundColor: '#ea9a06',
    fontSize: 20,
    textAlign: 'center',
    // justifyContent: 'center'
    letterSpacing: 2,
    // justifyContent: 'center'
    paddingTop: wp('5%'),
    color: 'black'
  }
});

AppRegistry.registerComponent("Help", () => Help);
