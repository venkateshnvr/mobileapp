import React, { Component } from "react";
import {
  StyleSheet,
  View,
  AppRegistry
} from "react-native";
import ImageViewer from "react-native-image-zoom-viewer";
import Constants from "expo-constants";

export default class RoundTrip extends Component {
  static navigationOptions = {
    header: null
  };

  image = [
    {
      props: {
        source: require("../assets/FloorMap/GroundFloor.jpg")
      }
    },
    {
      props: {
        source: require("../assets/FloorMap/FirstFloor.png")
      }
    },
    {
      props: {
        source: require("../assets/FloorMap/SecondFloor.jpg")
      }
    }
  ];
  render() {
    return (
      <View style={styles.welcomeImage}>
        <ImageViewer imageUrls={this.image} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  welcomeImage: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    // width: 500,
    // height: 500,
    // resizeMode: "contain",
    // marginTop: 3,
    // marginLeft: -10
  }
});

AppRegistry.registerComponent("RoundTrip", () => RoundTrip);
