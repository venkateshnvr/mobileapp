import React from 'react';
import {createStackNavigator} from 'react-navigation';
import { StackNavigator } from 'react-navigation';
import HomeScreen from './screens/HomeScreen';
import Video from './screens/Video';
import VC1 from './screens/VC1';

const AppNavigator = createStackNavigator({
    HomeScreen: { screen: HomeScreen},
    Video: { screen: Video},
    VC1:{screen:VC1},
})

export default AppNavigator;