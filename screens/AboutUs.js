import React, { Component } from "react";
import { Text, View, StyleSheet, AppRegistry } from "react-native";
import Constants from "expo-constants";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";

export default class AboutUs extends Component {
  static navigationOptions = {  // satatus bar back button
    header: null
  };
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.AboutUs}>ABOUT MUSEUM</Text>
          <Text style={styles.text}>
            The prestigious Robotic gallery is an iconic project, first ever of
            its kind in India. A world class facility to educate the people in
            the field of robotics and provide the young brains a platform to
            showcase their innovations. Built by the Gujarat Council of Science
            City, Department of Science and Technology, the gallery is an
            epitome of our honourable PM Sh. Narendra Modi’s Digital India
            movement.
          </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    backgroundColor: "white",
    fontSize: 20,
    backgroundColor: "white",
  },
  text: {
    flex: 1,
    fontSize: 18,
    textAlign: "justify",
    flexDirection: 'row',
    color: 'black',
    // margin: wp('2%')
  },
  AboutUs: {
    height: hp('8%'),
    paddingTop: 1,
    fontWeight: "bold",
    fontSize: 20,
    backgroundColor: '#ea9a06',
    textAlign: "center",
    color: "black",
    paddingTop: wp('5%'),
  },
});

AppRegistry.registerComponent("AboutUs", () => AboutUs);