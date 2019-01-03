import React from 'react';
import { ListItem } from 'react-native-elements';

const name1= "Muesuem Info";
const sub1 ="Details about exhibits"
const name2="About Us"
const sub2="Details about exhibits"
const list = [
  {
    name: 'Museum Info',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
    subtitle: 'Details about exhibits'
  },
  {
    name: 'Museum Info',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
    subtitle: 'Details about exhibits'
	},
	{
    name: 'About Us',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
    subtitle: 'Details about exhibits'
	},
	{
    name: 'About Us',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
    subtitle: 'Details about exhibits'
	},
	{
    name: 'About Us',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
    subtitle: 'Details about exhibits'
  },
]
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
    backgroundColor: "#0000FF",
    paddingHorizontal: 30,
    paddingVertical: 5,
    borderRadius: 10
    }
});
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

import {Splash} from './Splash';
//import {Video} from './Video';


export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };
	_onPressButton() {
    Alert.alert('You tapped the button!')
  }
  _onVideoButton(){
    Alert.alert("Video Zone")
    //<Video/>
  }

	render() {
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
              
                <ListItem style={style.customBtnText}>
                  onPress={this._onVideoButton}
                  name:"Muesuem Info"
                  subtitle:"Details about exhibit"
                </ListItem>

                <ListItem style={style.customBtnText}
                  onPress={this._onPressButton}
                  
                  title={name1}
                  
                  subtitle={sub1}
                  
                />

                <ListItem style={style.customBtnText}>
                  
                  onPress={this._onPressButton}
                  name:"Muesuem Info"
                  subtitle:"Details about exhibit"
                </ListItem>

                <ListItem style={style.customBtnText}>
                  onPress={this.onPressButtontton}
                  name:"Muesuem Info"
                  subtitle:"Details about exhibit"
                </ListItem>

                <ListItem style={style.customBtnText}>
                  onPress={this._onPressButton}
                  name:"Muesuem Info"
                  subtitle:"Details about exhibit"
                </ListItem>

              {  list.map((l, i) => (
                  <ListItem style={style.customBtnText}
                    
                    onPress={this._onPressButton}
                    key={i}
                    leftAvatar={{ source: { uri: l.avatar_url } }}
                    title={l.name}
                    subtitle={l.subtitle}
                  />
                ))
              }
        	</View>

      	 
					<View style={style.customBtnBG}  backgroundColor="white"  >
          	<Button
            	onPress={this._onVideoButton}
							title="Muesuem Info"
							
          	/>
        	</View>
							
					<View style={style.customBtnBG}backgroundColor="white">
          	<Button
            	onPress={this._onPressButton}
            	title="About Us"
          	/>
        	</View>

					<View style={style.customBtnBG}backgroundColor="white">
          	<Button
            	onPress={this._onPressButton}
            	title="About Us"
          	/>
        	</View>

					<View style={style.customBtnBG}backgroundColor="white">
          	<Button
            	onPress={this._onPressButton}
            	title="About Us"
          	/>
        	</View>

					<View style={style.customBtnBG}backgroundColor="white">
          	<Button
            	onPress={this._onPressButton}
            	title="About Us"
          	/>
        	</View>
					
					<View style={styles.container}>
        		
						<TouchableHighlight onPress={this._onPressButton} underlayColor="white">
          		<View style={style.customBtnBG}>
           		 <Text style={style.customBtnText}>TouchableHighlight</Text>
          		</View>
        		</TouchableHighlight>
        		
						<TouchableOpacity onPress={this._onPressButton}>
          		<View style={style.customBtnBG}>
            		<Text style={style.customBtnText}>TouchableOpacity</Text>
          		</View>
        		</TouchableOpacity>
        		
						<TouchableNativeFeedback
            	onPress={this._onPressButton}
            	background={Platform.OS === 'android' ? TouchableNativeFeedback.SelectableBackground() : ''}>
          			<View style={style.customBtnBG}>
            			<Text style={style.customBtnText}>TouchableNativeFeedback</Text>
          			</View>
        		</TouchableNativeFeedback>
        		
						<TouchableWithoutFeedback
            	onPress={this._onPressButton}
            >
          		<View style={style.customBtnBG}>
            		<Text style={style.customBtnText}>TouchableWithoutFeedback</Text>
          		</View>
        		</TouchableWithoutFeedback>
        		
						<TouchableHighlight onPress={this._onPressButton} onLongPress={this._onLongPressButton} underlayColor="white">
          		<View style={style.customBtnBG}>
            		<Text style={style.customBtnText}>Touchable with Long Press</Text>
          		</View>
        		</TouchableHighlight>
      </View>





			</ScrollView>
      
		</View>

    
    );
  }

  _maybeRenderDevelopmentModeWarning() {
    if (__DEV__) {
      const learnMoreButton = (
        <Text onPress={this._handleLearnMorePress} style={styles.helpLinkText}>
          Learn more
        </Text>
      );

      return (
        <Text style={styles.developmentModeText}>
          Development mode is enabled, your app will be slower but you can use useful development
          tools. {learnMoreButton}
        </Text>
      );
    } else {
      return (
        <Text style={styles.developmentModeText}>
          You are not in development mode, your app will run at full speed.
        </Text>
      );
    }
  }

  _handleLearnMorePress = () => {
    WebBrowser.openBrowserAsync('https://docs.expo.io/versions/latest/guides/development-mode');
  };

  _handleHelpPress = () => {
    WebBrowser.openBrowserAsync(
      'https://docs.expo.io/versions/latest/guides/up-and-running.html#can-t-see-your-changes'
    );
  };
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
