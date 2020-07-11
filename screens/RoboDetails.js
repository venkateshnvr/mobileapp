import React, { Component } from 'react';
// import Video from 'react-native-video'
import { Asset, Audio, Font, Video } from 'expo';
import VideoPlayer from '@expo/videoplayer';
import PropTypes from 'prop-types'
import { 
         Dimensions,
         AppRegistry,
         View,
         Text,
         StyleSheet,
         Image
} from 'react-native';
 import { StackNavigator } from 'react-navigation';
 
export default class RoboDetails extends Component{


    


    // renderVideo() {

    //     return(
        
      
    //         <Video
    //             source={{uri: 'https://www.w3schools.com/html/mov_bbb.mp4'}}
    //             style={{ width: 800, height: 800 }}
    //             muted={true}
    //             repeat={true}
    //             resizeMode={"cover"}
    //             volume={1.0}
    //             rate={1.0}
                
    //             ignoreSilentSwitch={"obey"}

    //         />


    //     )
    // }
        
        render () {

            const name = this.props.navigation.getParam('name', 'NO-name');
            const description = historyGallery[`description_${name}`]
            const facts = historyGallery[`facts_${name}`]
        return (
            <View>
     

                <VideoPlayer
                    
                    videoProps={{
                        playThroughEarpieceAndroid:true,
                        shouldPlay: true,
                        resizeMode: Video.RESIZE_MODE_CONTAIN,
                        
                        source: {
                            uri: 'https://www.w3schools.com/html/mov_bbb.mp4',
                            
                        },
                        ref: component => {
                            this._playbackInstance = component;
                        },
                    }}
                    isPortrait={true}
                    // isPortrait={this.state.isPortrait}
                    playFromPositionMillis={0}
                    // switchToLandscape={this.switchToLandscape.bind(this)}
                    // switchToPortrait={this.switchToPortrait.bind(this)}
                    
                
                />

            
            

                {/* <Text>{name}</Text> */}


                <Text style={{color: '#4a47a3', fontSize: 20, fontWeight: 'bold', position: 'relative', top: 15, left: 5}}>
                    Description :
                </Text>

                <Text style={{color: '#5b5656', fontSize: 15, position: 'relative', top: 20, left: 5, textAlign: 'justify', width: '97%'}}>{description}</Text>

                <Text style={{color: '#4a47a3', fontSize: 20, fontWeight: 'bold',position: 'relative', top: 50, left: 5}}>
                    Interesting Facts :
                </Text>

                <Text style={{color: '#5b5656', fontSize: 15, position: 'relative', top: 55, left: 5, textAlign: 'justify', width: '97%'}}>{facts} </Text>




            </View>


            
        );
    
    }
}
AppRegistry.registerComponent('RoboDetails',()=> RoboDetails)