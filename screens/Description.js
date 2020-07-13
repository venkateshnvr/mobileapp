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
    TouchableWithoutFeedback,
    
} from 'react-native';
import { WebView } from 'react-native-webview'
import { StackNavigator } from 'react-navigation';
import Splash from './Splash';
import Master from './contents/Master.json';






const DeviceWidth = Dimensions.get('window').width




export default class Description extends Component{
  static navigationOptions={
    header: null,
    }

//get the subexhibit identifier
   subExhibitId = this.props.navigation.getParam('subExhibitId', 'NO-id');
   exhibitId = this.props.navigation.getParam('exhibitId', 'NO-id');

//fetch the subexhibit details
    Data = Master.exhibits[this.exhibitId].subExhibits[this.subExhibitId]

    

    


    render() {

        const { width } = Dimensions.get('window');
     
       
    return(


    

        
    <View style={{ flex: 1}}>



            <View style={{ height: 300 }}>

            {/* video player */}
            <WebView
                    style={ styles.WebViewContainer }
                    javaScriptEnabled={true}
                    domStorageEnabled={true}
                    source={{uri: 'https://www.youtube.com/embed/o07Ju5snaCw' }}
            />

            </View>


         

        {/* Robot Description */}
        
          <ScrollView contentContainerStyle={{ flexGrow: 1 }}>

          
            <Text style={{color: '#1b262c', fontSize: 22, fontWeight: 'bold', position: 'relative', top: 40, left: 7}}>
              Description :
            </Text>
        

            <Text style={{color: '#0f4c75', fontSize: 17, position: 'relative', top:50, padding: '2%', textAlign:"justify", flex:1}}>{this.Data.description}</Text>
            

            <View style={{height:50}} />

            


        </ScrollView>

        
      </View>
            
            
            
          
        
   
    );
        
  }
}


//styling the component
const styles = StyleSheet.create({

  WebViewContainer: {
  
      marginTop: (Platform.OS == 'android') ? 30 : 0,
      
    }
    
  });


  
  
  
AppRegistry.registerComponent('Description',()=> Description)