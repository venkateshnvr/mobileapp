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

const DeviceWidth = Dimensions.get("window").width;

export default class HistoryGallery extends Component {
  static navigationOptions = {
    header: null
  };
  render() {
    return (
      //  <QRCodeScanner
      //   onRead={this.onSuccess}
      //   flashMode={QRCodeScanner.Constants.FlashMode.torch}
      //   topContent={
      //     <Text style={styles.centerText}>
      //       Go to <Text style={styles.textBold}>wikipedia.org/wiki/QR_Code</Text>
      //     </Text>
      //   }
      //   bottomContent={
      //     <TouchableOpacity style={styles.buttonTouchable}>
      //       <Text style={styles.buttonText}>OK. Got it!</Text>
      //     </TouchableOpacity>
      //   }
      // />

      <ScrollView style={styles.container}>
        <View style={styles.containers}>
          {/* <TouchableOpacity onPress={() => this.props.navigation.navigate('RoboDetails', {name:'Leonardo'})}>
              <View style={styles.box}>
                  
                <Image  source={
                  __DEV__
                   ? require('../assets/images/HistoryGallery/Leonardo.jpg')
                   : require('../assets/images/robot-prod.png')
               }style={styles.box}/>
               <Text style={styles.text}>Leonardo's Robot</Text>
               </View> 
              </TouchableOpacity>


              <TouchableOpacity onPress={() => this.props.navigation.navigate('RoboDetails', {name:'Clockwork'})}>
              <View style={styles.box}>
                <Image  
                  source={
                  __DEV__
                   ? require('../assets/images/HistoryGallery/Clockwork.jpg')
                   : require('../assets/images/robot-prod.png')
               }
               style={styles.box}/>
               <Text style={styles.text}>Clockwork Prayer</Text>
               </View> 
              </TouchableOpacity>


              <TouchableOpacity onPress={() => this.props.navigation.navigate('RoboDetails', {name:'Karakuri'})}>
              <View style={styles.box}>
                  
                <Image  source={
                  __DEV__
                   ? require('../assets/images/HistoryGallery/Karakuri.jpg')
                   : require('../assets/images/robot-prod.png')
               }style={styles.box}/>
               <Text style={styles.text}>Karakuri Puppets</Text>
               </View> 
              </TouchableOpacity>



              <TouchableOpacity onPress={() => this.props.navigation.navigate('RoboDetails', {name:'Trumpet'})}>
              <View style={styles.box}>
                  
                <Image  source={
                  __DEV__
                   ? require('../assets/images/HistoryGallery/Trumpet_Player.jpg')
                   : require('../assets/images/robot-prod.png')
               }style={styles.box}/>
               <Text style={styles.text}>Automaton Trumpet Player</Text>
               </View> 
              </TouchableOpacity>




              <TouchableOpacity onPress={() => this.props.navigation.navigate('RoboDetails', {name:'Maria'})}>
              <View style={styles.box}>
                  
                <Image  source={
                  __DEV__
                   ? require('../assets/images/HistoryGallery/Maria.jpg')
                   : require('../assets/images/robot-prod.png')
               }style={styles.box}/>
               <Text style={styles.text}>Maria Maschinenmensch - Metropolis</Text>
               </View> 
              </TouchableOpacity>



              <TouchableOpacity onPress={() => this.props.navigation.navigate('RoboDetails', {name:'Unimate'})}>
              <View style={styles.box}>
                  
                <Image  source={
                  __DEV__
                   ? require('../assets/images/HistoryGallery/unimate.jpg')
                   : require('../assets/images/robot-prod.png')
               }style={styles.box}/>
               <Text style={styles.text}>Unimate</Text>
               </View> 
              </TouchableOpacity>




              <TouchableOpacity onPress={() => this.props.navigation.navigate('RoboDetails', {name:'Dalek'})}>
              <View style={styles.box}>
                  
                <Image  source={
                  __DEV__
                   ? require('../assets/images/HistoryGallery/Dr.WhoDalek.jpeg')
                   : require('../assets/images/robot-prod.png')
               }style={styles.box}/>
               <Text style={styles.text}>Dalek - Dr. Who</Text>
               </View> 
              </TouchableOpacity>



              <TouchableOpacity onPress={() => this.props.navigation.navigate('RoboDetails', {name:'Wabot1'})}>
              <View style={styles.box}>
                  
                <Image  source={
                  __DEV__
                   ? require('../assets/images/HistoryGallery/WABOT1.jpg')
                   : require('../assets/images/robot-prod.png')
               }style={styles.box}/>
               <Text style={styles.text}>WABOT 1</Text>
               </View> 
              </TouchableOpacity>



              <TouchableOpacity onPress={() => this.props.navigation.navigate('RoboDetails', {name:'Kuka'})}>
              <View style={styles.box}>
                  
                <Image  source={
                  __DEV__
                   ? require('../assets/images/HistoryGallery/kuka.jpg')
                   : require('../assets/images/robot-prod.png')
               }style={styles.box}/>
               <Text style={styles.text}>KUKA Robots</Text>
               </View> 
              </TouchableOpacity>



              <TouchableOpacity onPress={() => this.props.navigation.navigate('RoboDetails', {name:'Silver'})}>
              <View style={styles.box}>
                  
                <Image  source={
                  __DEV__
                   ? require('../assets/images/HistoryGallery/silver.jpg')
                   : require('../assets/images/robot-prod.png')
               }style={styles.box}/>
               <Text style={styles.text}>The Silver Arm</Text>
               </View> 
              </TouchableOpacity>



              <TouchableOpacity onPress={() => this.props.navigation.navigate('RoboDetails', {name:'StarWars'})}>
              <View style={styles.box}>
                  
                <Image  source={
                  __DEV__
                   ? require('../assets/images/HistoryGallery/starwars.jpg')
                   : require('../assets/images/robot-prod.png')
               }style={styles.box}/>
               <Text style={styles.text}>Star Wars</Text>
               </View> 
              </TouchableOpacity>




              <TouchableOpacity onPress={() => this.props.navigation.navigate('RoboDetails', {name:'Delta'})}>
              <View style={styles.box}>
                  
                <Image  source={
                  __DEV__
                   ? require('../assets/images/HistoryGallery/Delta.jpg')
                   : require('../assets/images/robot-prod.png')
               }style={styles.box}/>
               <Text style={styles.text}>Delta Pick and Place Robot</Text>
               </View> 
              </TouchableOpacity>



              <TouchableOpacity onPress={() => this.props.navigation.navigate('RoboDetails', {name:'DirectDrive'})}>
              <View style={styles.box}>
                  
                <Image  source={
                  __DEV__
                   ? require('../assets/images/HistoryGallery/DirectDriveArm.jpg')
                   : require('../assets/images/robot-prod.png')
               }style={styles.box}/>
               <Text style={styles.text}>Direct Drive Arm</Text>
               </View> 
              </TouchableOpacity>



              <TouchableOpacity onPress={() => this.props.navigation.navigate('RoboDetails', {name:'Scara'})}>
              <View style={styles.box}>
                  
                <Image  source={
                  __DEV__
                   ? require('../assets/images/HistoryGallery/scara.jpg')
                   : require('../assets/images/robot-prod.png')
               }style={styles.box}/>
               <Text style={styles.text}>SCARA</Text>
               </View> 
              </TouchableOpacity>




              <TouchableOpacity onPress={() => this.props.navigation.navigate('RoboDetails', {name:'Raibert'})}>
              <View style={styles.box}>
                  
                <Image  source={
                  __DEV__
                   ? require('../assets/images/HistoryGallery/hopper.jpg')
                   : require('../assets/images/robot-prod.png')
               }style={styles.box}/>
               <Text style={styles.text}>Raibert Hopper Robot</Text>
               </View> 
              </TouchableOpacity>



              <TouchableOpacity onPress={() => this.props.navigation.navigate('RoboDetails', {name:'Wabot2'})}>
              <View style={styles.box}>
                  
                <Image  source={
                  __DEV__
                   ? require('../assets/images/HistoryGallery/WABOT2.jpg')
                   : require('../assets/images/robot-prod.png')
               }style={styles.box}/>
               <Text style={styles.text}>WABOT 2</Text>
               </View> 
              </TouchableOpacity>



              <TouchableOpacity onPress={() => this.props.navigation.navigate('RoboDetails', {name:'Jhonny'})}>
              <View style={styles.box}>
                  
                <Image  source={
                  __DEV__
                   ? require('../assets/images/HistoryGallery/johnnyfive.jpg')
                   : require('../assets/images/robot-prod.png')
               }style={styles.box}/>
               <Text style={styles.text}>Johnny Five</Text>
               </View> 
              </TouchableOpacity>




              <TouchableOpacity onPress={() => this.props.navigation.navigate('RoboDetails', {name:'Sojourner'})}>
              <View style={styles.box}>
                  
                <Image  source={
                  __DEV__
                   ? require('../assets/images/HistoryGallery/sojourner.jpg')
                   : require('../assets/images/robot-prod.png')
               }style={styles.box}/>
               <Text style={styles.text}>Sojourner Rover</Text>
               </View> 
              </TouchableOpacity> */}
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  // centerText: {
  //   flex: 1,
  //   fontSize: 18,
  //   padding: 32,
  //   color: '#777',
  // },

  // textBold: {
  //   fontWeight: '500',
  //   color: '#000',
  // },

  // buttonText: {
  //   fontSize: 21,
  //   color: 'rgb(0,122,255)',
  // },

  // buttonTouchable: {
  //   padding: 16,
  // },

  container: {
    flex: 1,
    backgroundColor: "#FFF"
  },

  containers: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    //padding:2,
    paddingTop: 5
  },

  box: {
    //margin:2,
    marginHorizontal: 2,
    marginVertical: 2,
    height: 200,
    width: Dimensions.get("window").width / 2 - 4,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#d2dae2"
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

AppRegistry.registerComponent("HistoryGallery", () => HistoryGallery);
