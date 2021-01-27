import React, { Component } from "react";
import { Text, View, StyleSheet, Span } from "react-native";

export default class AboutUs extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.AboutUs}>About Museum</Text>
        {/* <Text style={styles.text}> */}
          <Text style={styles.text}>
          <Text>{"             "}</Text>
            The prestigious Robotic gallery is an iconic project, first ever of
            its kind in India. A world class facility to educate the people in
            the field of robotics and provide the young brains a platform to
            showcase their innovations. Built by the Gujarat Council of Science
            City, Department of Science and Technology, the gallery is an
            epitome of our honourable PM Sh. Narendra Modi’s Digital India
            movement.
          </Text>
        {/* </Text> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: "#fff",
    fontSize: 20,
    backgroundColor: "white"
  },
  text: {
    flex: 1,
    fontSize: 18,
    textAlign: "justify",
    margin: 10,
    flexDirection: 'row',
    // flexWrap: 'nowrap'
    color: 'black'
  },
  AboutUs: {
    fontWeight: "bold",
    fontSize: 20,
    // marginTop: 5,
    // marginHorizontal: 10,
    backgroundColor: 'black',
    height: 50,
    marginTop: -10,
    textAlign: "center",
    color: "white",
    padding: 10
  },
  span: {
    marginHorizontal: 50
    // margin: 20,
    // paddingHorizontal: 10
  }
});
