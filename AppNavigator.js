import React from 'react';
import {createStackNavigator} from 'react-navigation';
import { StackNavigator } from 'react-navigation';

//import all the screens here
import HomeScreen from './screens/HomeScreen';
import ScanScreen from './screens/ScanScreen';
import Exhibits from './screens/Exhibits';
import subExhibits from './screens/subExhibits';
import Description from './screens/Description';

//Create the stack navigator of react-navigation
const AppNavigator = createStackNavigator({
    HomeScreen: { screen: HomeScreen},
    ScanScreen: {screen: ScanScreen},
    Exhibits:{screen: Exhibits},
    subExhibits:{screen: subExhibits},
    Description:{screen:Description},
})

export default AppNavigator;