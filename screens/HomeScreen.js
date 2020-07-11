import React from 'react';
import { ListItem } from 'react-native-elements';
import { StackNavigator } from 'react-navigation';
import {createStackNavigator} from 'react-navigation';

import {
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

import { WebBrowser } from 'expo';
import { MonoText3} from '../components/StyledText';






const name1 = "Muesuem Exhibits";
const sub1 = "A quick tour around the museum"
const name2 = "Guided Tour"
const sub2 = "Guided tour based timeline"
const name3 = "Show Timings"
const sub3 = "List of non-guided show times"
const name4 = "Visit Robseum"
const sub4 = "A map for round trip"
const name5 = "About Us"
const sub5 = "know about us"
const name6 = "Help"
const sub6 = "contacts and FAQs"

export default class HomeScreen extends React.Component {
  static navigationOptions={
    header: null,
    
  }
	_onPressButton() {
    Alert.alert('Okay!')
  }
  _onVideoButton(){
    Alert.alert("Video Zone!") 
  }
  _onTourButton(){
    Alert.alert('Tour has been started!')
  }
  _onShowButton(){
    Alert.alert('See the Show timings!')
  }
  _onVisitButton(){
    Alert.alert('Welcome to the Roboseum!')
  }
  _onAboutButton(){
    Alert.alert('Get to know about!')
  }
  _onHelpButton(){
    Alert.alert('Important contacts and FAQs!')
  }

	render() {
    //var {navigate} = this.props.navigation;
		return (

      
      <View style={styles.container}>
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
					<View style={styles.welcomeContainer}>
            <Image
							
              source={
                __DEV__
                  ? require('../assets/images/logo.jpg')
                  : require('../assets/images/robot-prod.png')
              }
              style={styles.welcomeImage}
            />
          </View>
					
					
					
					<View style={styles.container}>
              
                <ListItem style={style.customBtnText}
                  onPress={this._onPressButton}
                  onPress={() => this.props.navigation.navigate('Exhibits')}
                  
                  title={name1}
                  
                  subtitle={sub1}
                  
                />


                <ListItem style={style.customBtnText}
                  onPress={this._onPressButton}
                  onPress={() => this.props.navigation.navigate('Tour')}
                  
                  title={name2}
                  
                  subtitle={sub2}
                  
                />

                <ListItem style={style.customBtnText}
                  onPress={this._onPressButton}
                  onPress={() => this.props.navigation.navigate('Show')}
                  
                  title={name3}
                  
                  subtitle={sub3}
                  
                />

                <ListItem style={style.customBtnText}
                  onPress={this._onPressButton}
                  onPress={() => this.props.navigation.navigate('Visit')}
                  
                  title={name4}
                  
                  subtitle={sub4}
                  
                />

                <ListItem style={style.customBtnText}
                  onPress={this._onPressButton}
                  onPress={() => this.props.navigation.navigate('About')}
                  
                  title={name5}
                  
                  subtitle={sub5}

                />

                <ListItem style={style.customBtnText}
                  onPress={this._onPressButton}
                  onPress={() => this.props.navigation.navigate('Help')}
                  
                  title={name6}
                  
                  subtitle={sub6}
                  
                />

        	</View>
							
					<View style={{marginHorizontal:40,paddingHorizontal:10,paddingTop:10,marginVertical:10}}backgroundColor="##0be881">
          <Button
                           
            	onPress={this._onPressButton}
            	title="FeedBack"
          />

        	</View>
					
			</ScrollView>
      
		</View>
   
    );
  } 
}

AppRegistry.registerComponent('HomeScreen',()=> HomeScreen)


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  developmentModeText: {
    marginBottom: 20,
    color: 'rgba(0,0,0,0.4)',
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center',
  },
  contentContainer: {
    paddingTop: 30,
  },
  welcomeContainer: {
    marginTop:20,
    paddingTop:55,
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  welcomeImage: {
    width: 200,
    height: 160,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightText: {
    color: 'rgba(96,100,109, 0.8)',
  },
  codeHighlightContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
  navigationFilename: {
    marginTop: 5,
  },
  helpContainer: {
    marginTop: 15,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
});

const style = StyleSheet.create({
  container: {
    flex: 1,
        justifyContent: "center",
    alignItems: "center"
  },

  /* Here, style the text of your button */
    customBtnText: {
        fontSize: 20,
        fontWeight: '300',
        color: "#fff",
    },

  /* Here, style the background of your button */
    customBtnBG: {
    margin:15,
    paddingTop:20,
    backgroundColor: "#0fbcf9",
    paddingHorizontal: 30,
    paddingVertical: 5,
    
    }
});
