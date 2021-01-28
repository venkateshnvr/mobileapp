"use strict";
import React, { Component } from "react";
import { ListItem } from "react-native-elements";
import { Constants } from "expo";
import { Col, Row, Grid } from "react-native-easy-grid";
import { createStackNavigator } from "react-navigation";
import YouTube from "react-native-youtube";
import {
  Dimensions,
  Alert,
  AppRegistry,
  Button,
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  FlatList,
  Text,
  TouchableOpacity,
  View,
  Linking,
  TouchableHighlight,
  TouchableNativeFeedback,
  TouchableWithoutFeedback
} from "react-native";
import { StackNavigator } from "react-navigation";
import Splash from "./Splash";
// import Master from "./contents/Master.json";

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
    const endpoint = __DEV__ ? 'http://10.10.3.94:8001' : 'https://museumserver.herokuapp.com';
    fetch(`${endpoint}/robots/exhibits/${robotGallery}`)
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
              subExhibitId: subExhibit.robotName
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
    marginTop: 30
  },

  container: {
    display: "flex",
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
