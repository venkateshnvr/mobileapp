import React from 'react';
import { Platform, StatusBar, StyleSheet,FlatList, View } from 'react-native';
import { AppLoading, Asset, Font, Icon } from 'expo';
import AppNavigator from './navigation/AppNavigator';
import axios from 'axios';

let one = 'https://scity.gujarat.gov.in/Roboseum/History_Gallery.json'
let two = 'https://scity.gujarat.gov.in/Roboseum/Robo_Natyamandap.json'
let three = 'https://scity.gujarat.gov.in/Roboseum/Botulity.json'
let four = 'https://scity.gujarat.gov.in/Roboseum/Sport-O-Mania.json'

const requestOne = axios.get(one);
const requestTwo = axios.get(two);
const requestThree = axios.get(three);
const requestFour = axios.get(four);

export default class App extends React.Component {
  state = {
    isLoadingComplete: false,
    //nameList: [],
  };

  render() {
    if (!this.state.isLoadingComplete && !this.props.skipLoadingScreen){
    const {nameList} = this.state;
      return (
        <AppLoading
          startAsync={this._loadResourcesAsync}
          onError={this._handleLoadingError}
          onFinish={this._handleFinishLoading}
        />
      );
    } else {
      return (
        <View style={styles.container}>
          {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
          <AppNavigator />
        </View>
      );
    }
 }

  _loadResourcesAsync = async () => {
    return Promise.all([
      Asset.loadAsync([
        require('./assets/images/robot-dev.png'),
        require('./assets/images/robot-prod.png'),
      ]),
      Font.loadAsync({
        // This is the font that we are using for our tab bar
        ...Icon.Ionicons.font,
        // We include SpaceMono because we use it in HomeScreen.js. Feel free
        // to remove this if you are not using it in your app
        'space-mono': require('./assets/fonts/SpaceMono-Regular.ttf'),
      }),
    ]);
  };

  _handleLoadingError = error => {
    // In this case, you might want to report the error to your error
    // reporting service, for example Sentry
    console.warn(error);
  };

  _handleFinishLoading = () => {
    this.setState({ isLoadingComplete: true });
  };

  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      //url: '',
    }
  }

  // make the GET request to fetch data from the URL then using promise function to handle response.

  componentDidMount() {
    axios.all([requestOne, requestTwo, requestThree, requestFour])
    .then(axios.spread((responses) => {
      const responseOne = responses[0]
      const responseTwo = responses[1]
      const responseThree = responses[2]
      const responseFour = responses[3]

      //const nameList = response.data;
      //console.log(response.data);
      this.setState({ 
      isLoading: false,
        //url: response.data.message,
        //nameList 
      });
    }))

    .catch(errors => {
      console.log(errors);
    });
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
