'use strict';
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
    Linking,
	  TouchableHighlight,
	  TouchableNativeFeedback,
	  TouchableWithoutFeedback
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import Splash from './Splash';
import Master from './contents/Master.json';
import icons from '../assets/images/images'




const DeviceWidth = Dimensions.get('window').width


export default class Exhibits extends Component{
  static navigationOptions={
    header: null,
    }

//fetch exhibits list
    initialArr = Master.exhibits

    
//construct the exhibits tiles
    renderTiles() {

      
      
      return this.initialArr.map((exhibit) => {
      
        
          return (
            
            <TouchableOpacity key={exhibit.id} onPress={() => this.props.navigation.navigate('subExhibits', {exhibitId: exhibit.id })}>
            <View style={styles.box}>
              
              <Image source={icons[exhibit.icon]} style={styles.box}/>

              {/* <Image  source={{uri: `http://192.168.0.104:3000/static/img/${exhibit.icon}` }} style={styles.box}/> */}

              <Text style={styles.text}>{exhibit.title}</Text>
             </View> 
            </TouchableOpacity>
          );
      });
  }


    render() {
     
       
        return(

          
          
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


          <View>
            {
                this.renderTiles()
            }
        </View>


          </View>
        </ScrollView>
   
    );
        
  }
}

//component styling
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
      backgroundColor: '#FFF',
    },

    containers:{
      flex: 1,
      flexDirection:"row",
      flexWrap:"wrap",
      //padding:2,
      paddingTop:5      
    },

    box: {
      //margin:2,
      marginHorizontal:1,
      marginVertical:1,
      height:200,
      width:Dimensions.get('window').width -4,
      justifyContent:"center",
      alignItems:"center",
      
    },

    text: {
      position: 'absolute',
      fontWeight: 'bold',
      color: '#ff2e63',
      fontSize: 20,
      backgroundColor: 'rgba(255,255,255,0.8)',
      padding: '3%',
      
      
  }

  });
  
  
  
AppRegistry.registerComponent('Exhibits',()=> Exhibits)