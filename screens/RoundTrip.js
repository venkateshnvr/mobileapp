import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
  AppRegistry
} from "react-native";
import ImageViewer from "react-native-image-zoom-viewer";

export default class RoundTrip extends Component {
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
      <View style={{ flex: 1 }}>
        <ImageViewer imageUrls={this.image} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  welcomeImage: {
    width: 500,
    height: 500,
    resizeMode: "contain",
    marginTop: 3,
    marginLeft: -10
  }
});

AppRegistry.registerComponent("RoundTrip", () => RoundTrip);
