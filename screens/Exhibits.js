"use strict";
import React, { Component } from "react";
import Constants from "expo-constants";
import {
  Dimensions,
  AppRegistry,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from "react-native";
import { ipConfig } from "../ipconfig"; // server connection local and production

export default class Exhibits extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gallerysList: []
    };
  }
  static navigationOptions = {
    header: null
  };

  componentDidMount() {
 // data fetch from server 
    fetch(`${ipConfig}/exhibits/gallerys`)
      .then(res => res.json())
      .then(res => {
        this.setState({
          gallerysList: res 
        });
      });
  }

  renderTiles() {
    const { gallerysList } = this.state; // list of exhibits
    return gallerysList.map(exhibit => {
      return (
        <TouchableOpacity
          key={exhibit._id} // database auto _id
          onPress={() =>
            this.props.navigation.navigate("subExhibits", { 
              exhibitGallery: exhibit.robotGalleryName // data pass throw paramater to navigate to subEXhibits component
            })
          }
        >
          <View style={styles.box}>
            <Image source={{ uri: exhibit.image }} style={styles.box} />
            <Text style={styles.text}>{exhibit.robotGalleryName}</Text>
          </View>
        </TouchableOpacity>
      );
    });
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        <View style={styles.containers}>
          <View>{this.renderTiles()}</View>
        </View>
      </ScrollView>
    );
  }
}

//component styling
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    backgroundColor: "#FFF",
  },

  containers: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    paddingTop: 5
  },

  box: {
    //margin:2,
    marginHorizontal: 1,
    marginVertical: 1,
    height: 200,
    width: Dimensions.get("window").width - 4,
    justifyContent: "center",
    alignItems: "center"
  },

  text: {
    position: "absolute",
    fontWeight: "bold",
    color: "#ff2e63",
    fontSize: 20,
    backgroundColor: "rgba(255,255,255,0.8)",
    padding: "3%"
  }
});

AppRegistry.registerComponent("Exhibits", () => Exhibits);
