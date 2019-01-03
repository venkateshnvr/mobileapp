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
 
export default class VC1 extends Component{


    renderVideo() {

        return(
        
      
            <Video
                source={{uri: 'https://www.w3schools.com/html/mov_bbb.mp4'}}
                style={{ width: 800, height: 800 }}
                muted={true}
                repeat={true}
                resizeMode={"cover"}
                volume={1.0}
                rate={1.0}
                
                ignoreSilentSwitch={"obey"}

            />


        )
    }
        
        render () {
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
                    //isPortrait={this.state.isPortrait}
                    playFromPositionMillis={0}
                    //switchToLandscape={this.switchToLandscape.bind(this)}
                    //switchToPortrait={this.switchToPortrait.bind(this)}
                
                />


            </View>
        );
    
    }
}
AppRegistry.registerComponent('VC1',()=> VC1)