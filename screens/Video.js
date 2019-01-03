import React, { Component } from 'react';
import { ListItem } from 'react-native-elements';
import { Constants } from 'expo';
import { Col, Row, Grid } from "react-native-easy-grid";
import {createStackNavigator} from 'react-navigation';
import YouTube from 'react-native-youtube'
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
	  TouchableHighlight,
	  TouchableNativeFeedback,
	  TouchableWithoutFeedback
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import Splash from './Splash';
import VC1 from './VC1';

const DeviceWidth = Dimensions.get('window').width

export default class Video extends Component{
  static navigationOptions={
    header: null,
    
  }
    render() {
      
        return(
   
        <ScrollView style={styles.container}>
            
          <View style={styles.containers}>
            
            <View style={styles.box}>
              <TouchableOpacity onPress={() => this.props.navigation.navigate('VC1')}>
                <Image  source={
                  __DEV__
                   ? require('../assets/images/v1.jpeg')
                   : require('../assets/images/robot-prod.png')
               }style={styles.box}/>
              </TouchableOpacity>
            </View> 


            <View style={styles.box}>
              <TouchableOpacity onPress={() => this.props.navigation.navigate('VC1')}>
                <Image  source={
                  __DEV__
                   ? require('../assets/images/v2.jpeg')
                   : require('../assets/images/robot-prod.png')
               }style={styles.box}/>
              </TouchableOpacity>
            </View> 


            <View style={styles.box}>
              <TouchableOpacity onPress={() => this.props.navigation.navigate('VC1')}>
                <Image  source={
                  __DEV__
                   ? require('../assets/images/v3.jpeg')
                   : require('../assets/images/robot-prod.png')
               }style={styles.box}/>
              </TouchableOpacity>
            </View> 


            <View style={styles.box}>
              <TouchableOpacity onPress={() => this.props.navigation.navigate('VC1')}>
                <Image  source={
                  __DEV__
                   ? require('../assets/images/v4.jpeg')
                   : require('../assets/images/robot-prod.png')
               }style={styles.box}/>
              </TouchableOpacity>
            </View> 

            <View style={styles.box}>
              <TouchableOpacity onPress={() => this.props.navigation.navigate('VC1')}>
                <Image  source={
                  __DEV__
                   ? require('../assets/images/v5.jpeg')
                   : require('../assets/images/robot-prod.png')
               }style={styles.box}/>
              </TouchableOpacity>
            </View> 

            <View style={styles.box}>
              <TouchableOpacity onPress={() => this.props.navigation.navigate('VC1')}>
                <Image  source={
                  __DEV__
                   ? require('../assets/images/v6.jpeg')
                   : require('../assets/images/robot-prod.png')
               }style={styles.box}/>
              </TouchableOpacity>
            </View> 

            <View style={styles.box}>
              <TouchableOpacity onPress={() => this.props.navigation.navigate('VC1')}>
                <Image  source={
                  __DEV__
                   ? require('../assets/images/v7.jpeg')
                   : require('../assets/images/robot-prod.png')
               }style={styles.box}/>
              </TouchableOpacity>
            </View> 
           
            <View style={styles.box}>
              <TouchableOpacity onPress={() => this.props.navigation.navigate('VC1')}>
                <Image  source={
                  __DEV__
                   ? require('../assets/images/v8.jpeg')
                   : require('../assets/images/robot-prod.png')
               }style={styles.box}/>
              </TouchableOpacity>
            </View> 





          </View>
        </ScrollView>
   
    );
        
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      
      backgroundColor: '#FFF',
    },
    containers:{
      flex: 1,
      flexDirection:"row",
      flexWrap:"wrap",
      //padding:2,
      paddingTop:5
      
    },
    box:{
      //margin:2,
      marginHorizontal:1,
      marginVertical:1,
      height:200,
      width:Dimensions.get('window').width/2 -4,
      justifyContent:"center",
      alignItems:"center",
      backgroundColor:"#d2dae2"
    },

  });
  
  
  
AppRegistry.registerComponent('Video',()=> Video)