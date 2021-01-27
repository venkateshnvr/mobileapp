import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
  AppRegistry
} from "react-native";
import YoutubePlayer from "react-native-youtube-iframe";

export default class QrcodeData extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      video: false,
      hindi: false,
      english: true,
      image: true,
      imagesArray: {}
    };
  }

  changeData = data => {
    if (data === "hindi") {
      return this.setState({
        video: this.state.video,
        image: this.state.image,
        hindi: true,
        english: false,
        imagesArray: this.state.imagesArray
      });
    } else if (data === "english") {
      return this.setState({
        video: this.state.video,
        image: this.state.image,
        hindi: false,
        english: true,
        imagesArray: this.state.imagesArray,
        loop: this.state.loop
      });
    } else if (data === "video") {
      return this.setState({
        video: true,
        image: false,
        hindi: this.state.hindi,
        english: this.state.english,
        imagesArray: this.state.imagesArray,
        loop: true
      });
    } else if (data === "image") {
      return this.setState({
        video: false,
        image: true,
        hindi: this.state.hindi,
        english: this.state.english,
        imagesArray: this.state.imagesArray
      });
    }
  };

  async componentDidMount() {
    let data = this.props.navigation.getParam("data");
    console.log("data", data);
    await fetch(`http://10.10.3.94:8001/robots/robot/${data}`)
      .then(res => {
        return res.json();
      })
      .then(data => {
        this.setState({
          video: false,
          hindi: false,
          english: true,
          image: true,
          imagesArray: data[0],
        });
      })
      .catch(err => console.log("err", err));
  }
  render() {
    let data = this.state.imagesArray;
    return (
      <View style={styles.view}>
        <View style={styles.margin}>
          <Image
            source={{ uri: data.image }}
            style={
              data.image !== "" && this.state.image
                ? [styles.image, { Visibility: "visible" }]
                : { display: "none" }
            }
          />
          <View
            style={
              data.video !== "" && this.state.video
                ? [styles.video, { visibility: "visible" }]
                : { display: "none" }
            }
          >
            <YoutubePlayer
              height={250}
              play={true}
              videoId={`${data.video}`}
              loop={false}
            />
          </View>
          <Text style={styles.text_1}>{data.robotName} </Text>
          <View style={{ marginBottom: 20, flex: 1 }}>
            <ScrollView
              style={
                this.state.english
                  ? { visibility: "visible" }
                  : { display: "none" }
              }
            >
              <Text style={styles.textEnglish}>
                <Text>{"                      "}</Text>
                {data.english}
              </Text>
            </ScrollView>
            <ScrollView
              style={
                this.state.hindi
                  ? { visibility: "visible" }
                  : { display: "none" }
              }
            >
              <Text style={styles.text}>
                <Text>{"                      "}</Text>
                {data.hindi}
              </Text>
            </ScrollView>
          </View>
        </View>
        <View style={styles.buttons}>
          {data.image !== "" && data.video !== "" ? (
            <View>
              <TouchableOpacity
                style={
                  this.state.image
                    ? [styles.button, { display: "none" }]
                    : { visibility: "visible" }
                }
                onPress={() => this.changeData("image")}
              >
                <Text style={styles.textb}>image</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={
                  this.state.video
                    ? [styles.button, { display: "none" }]
                    : { visibility: "visible" }
                }
                onPress={() => this.changeData("video")}
              >
                <Text style={styles.textb}>video</Text>
              </TouchableOpacity>
            </View>
          ) : null}
          <TouchableOpacity
            style={
              this.state.hindi
                ? [styles.button, { display: "none" }]
                : { visibility: "visible" }
            }
            onPress={() => this.changeData("hindi")}
          >
            <Text style={styles.textb}>Hindi</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={
              this.state.english
                ? [styles.button, { display: "none" }]
                : { visibility: "visible" }
            }
            onPress={() => this.changeData("english")}
          >
            <Text style={styles.textb}>English</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  image: {
    width: 350,
    height: 350,
    borderRadius: 10
  },
  view: {
    margin: 5,
    // marginTop: 20,
    flex: 1
  },
  text: {
    fontSize: 18,
    textAlign: "justify",
    marginBottom: 25,
    color: "#000000fa"
  },
  text_1: {
    fontWeight: "bold",
    fontSize: 20
  },
  margin: {
    marginBottom: 5,
    flex: 1
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "space-around",
    position: "absolute",
    bottom: 0,
    right: 0,
    left: 0,
    backgroundColor: "orange",
    borderRadius: 10
  },
  video: {
    alignContent: "center",
    marginTop: 30
  },
  button: {
    borderRadius: 10,
    margin: 10
  },
  textb: {
    margin: 10,
    fontSize: 18
  },
  textEnglish: {
    fontSize: 18,
    textAlign: "justify",
    margin: 10,
    color: "#000000fa"
  }
});

AppRegistry.registerComponent("QrcodeData", () => QrcodeData);
