"use strict";
import React, { Component } from "react";
import {
  Dimensions,
  AppRegistry,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { ipConfig } from "../ipconfig"; // server connection local and production
import Constants from "expo-constants";

const DeviceWidth = Dimensions.get("window").width;

export default class subExhibits extends Component {
  constructor(props) {
    super(props);
    this.state = {
      exhibit: []
    }
  }

  static navigationOptions = {
    header: null
  };

  componentDidMount() {
    let robotGallery = this.props.navigation.getParam("exhibitGallery");
    fetch(`${ipConfig}/robots/exhibits/${robotGallery}`) // fetch data from server and send parameter gallary name
    .then(res => res.json())
    .then(res => {
      console.log(res)
      this.setState({
        exhibit: res
      })
    })
  }

  renderTiles() {
    console.log(this.state.exhibit)
    return this.state.exhibit.map(subExhibit => {
      return (
        <TouchableOpacity
          key={subExhibit._id}
          onPress={() =>
            this.props.navigation.navigate("Description", {
              subExhibitId: subExhibit.robotName // send robot name parameter
            })
          }
        >
          <View style={styles.box}>
            <Image source={{uri: subExhibit.image}} style={styles.box} />
            <Text style={styles.text}>{subExhibit.robotName}</Text>
          </View>
        </TouchableOpacity>
      );
    });
  }

  render() {
    return (
      <ScrollView style={styles.containers}>
        <View style={styles.container}>{this.renderTiles()}</View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  containers: {
    flex:1,
    // marginTop: 30,
    paddingTop: Constants.statusBarHeight,
  },

  container: {
    // display: "flex",
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap"
  },

  box: {
    //margin:2,
    marginHorizontal: 1,
    marginVertical: 1,
    height: 200,
    width: Dimensions.get("window").width / 2 - 2,
    justifyContent: "center",
    alignItems: "center"
  },

  text: {
    position: "absolute",
    fontWeight: "bold",
    color: "white",
    fontSize: 15,
    backgroundColor: "rgba(0,0,0,0.5)",
    padding: "1%",
    bottom: 0,
    width: "100%",
    textAlign: "center"
  }
});

AppRegistry.registerComponent("subExhibits", () => subExhibits);
