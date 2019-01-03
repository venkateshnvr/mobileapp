import React, { Component } from 'react';
import { 
         AppRegistry,
         View,
         Text,
         StyleSheet,
         Image
} from 'react-native';
 import { StackNavigator } from 'react-navigation';
 import {HomeScreen} from './HomeScreen';
    
export default class Splash extends Component{
    
    render() {

        return(<Text>Hello World</Text>);
        
    }
}
AppRegistry.registerComponent('Splash',()=> Splash)