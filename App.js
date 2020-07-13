import React from 'react';
import { Platform, StatusBar, StyleSheet,FlatList, View } from 'react-native';
import { AppLoading, Icon } from 'expo';
import { Asset } from 'expo-asset';
import { Font } from 'expo-font';
import AppNavigator from './AppNavigator';

export default class App extends React.Component {
  // Assign loading state
  state = {
    isLoadingComplete: false,
  };

  render() {
    //Check the loading state and perform initialization regarding the state
    if (!this.state.isLoadingComplete && !this.props.skipLoadingScreen) {
      return (
        //define action when the app is loading
        <AppLoading
          startAsync={this._loadResourcesAsync}
          onError={this._handleLoadingError}
          onFinish={this._handleFinishLoading}
        />
      );
    } else {
      return (
        //define action when the loading is completed
        <View style={styles.container}>
          {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
          <AppNavigator />
        </View>
      );
    }
  }

  //action to implement while loading
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

  //Error handling
  _handleLoadingError = error => {
    // In this case, you might want to report the error to your error
    // reporting service, for example Sentry
    console.warn(error);
  };

  //Action when the loading is finished
  _handleFinishLoading = () => {
    this.setState({ isLoadingComplete: true });
  };
}

//styling of the component
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});