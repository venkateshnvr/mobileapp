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




export default class subExhibits extends Component{
  static navigationOptions={
    header: null,
    }

//fetch the exhibit identifier
   exhibitId = this.props.navigation.getParam('exhibitId', 'NO-id');

//fetch the sub exhibits of the clicked exhibit
    initialArr = Master.exhibits[this.exhibitId].subExhibits

    
//construct the subexhibit tiles
    renderTiles() {

      
      
      return this.initialArr.map((subExhibit) => {
        
          return (
            
            <TouchableOpacity key={subExhibit.id} onPress={() => this.props.navigation.navigate('Description',{exhibitId:this.exhibitId, subExhibitId:subExhibit.id})}>
            <View style={styles.box}>
              
              <Image  source={icons[subExhibit.icon]} style={styles.box}/>

              {/* <Image  source={{uri: `http://192.168.0.104:3000/static/img/${subExhibit.icon}` }} style={styles.box}/> */}

              <Text style={styles.text}>{subExhibit.title}</Text>
             </View> 
            </TouchableOpacity>
          );
      });
  }


    render() {

        
     
       
        return(

          
   
        <ScrollView style={styles.containers}>
            
          


           {/* <Text>{this.exhibitId}</Text>    */}


          <View style={styles.container}>
            {
                this.renderTiles()
            }
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

    // container: {
    //   flex: 1,
      
    //   backgroundColor: '#FFF',
    // },

    containers:{
      // flex: 1,
      // flexDirection:"row",
      // flexWrap:"wrap",
      //padding:2,
     
          
    },

    container: {
      display: 'flex',
      flexDirection: 'row',
      flexWrap:"wrap",
    },

    box: {
      //margin:2,
      marginHorizontal:1,
      marginVertical:1,
      height:200,
      width:Dimensions.get('window').width/2 -2,
      justifyContent:"center",
      alignItems:"center",
      
      
    },

    text: {
      position: 'absolute',
      fontWeight: 'bold',
      color: 'white',
      fontSize: 15,
      backgroundColor: 'rgba(0,0,0,0.5)',
      padding: '1%',
      bottom: 0,
      width: '100%',
      textAlign: 'center'
      
      
      
  }

  });
  
  
  
AppRegistry.registerComponent('subExhibits',()=> subExhibits)