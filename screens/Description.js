"use strict";
import React, { Component } from "react";
import {
  Dimensions,
  AppRegistry,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  View
} from "react-native";
import { WebView } from "react-native-webview";

export default class Description extends Component {
  constructor(props) {
    super(props);
    this.state = {
      video: "",
      english: ""
    };
  }
  static navigationOptions = {
    header: null
  };

  componentDidMount() {
    let robotName = this.props.navigation.getParam("subExhibitId");
    fetch(`http://10.10.3.94:8001/robots/robot/${robotName}`)
      .then(res => res.json())
      .then(res => {
        this.setState({
          english: res[0].english,
          video: res[0].video
        });
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <View style={{ height: 300 }}>
          {/* video player */}
          <WebView
            style={styles.WebViewContainer}
            javaScriptEnabled={true}
            domStorageEnabled={true}
            source={{
              uri: `https://www.youtube.com/embed/${this.state.video}`
            }}
          />
        </View>

        {/* Robot Description */}

        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
          <Text
            style={{
              color: "#1b262c",
              fontSize: 22,
              fontWeight: "bold",
              position: "relative",
              top: 40,
              left: 7
            }}
          >
            Description :
          </Text>

          <Text
            style={{
              color: "#0f4c75",
              fontSize: 17,
              position: "relative",
              top: 50,
              padding: "2%",
              textAlign: "justify",
              flex: 1
            }}
          >
            {this.state.english}
          </Text>

          <View style={{ height: 50 }} />
        </ScrollView>
      </View>
    );
  }
}

//styling the component
const styles = StyleSheet.create({
  WebViewContainer: {
    marginTop: Platform.OS == "android" ? 30 : 0
  }
});

AppRegistry.registerComponent("Description", () => Description);
