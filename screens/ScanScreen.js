import React from "react";
import { StyleSheet, Text, View, AppRegistry } from "react-native";
import { BarCodeScanner } from "expo-barcode-scanner";
import { Images } from "./QrcodeData";

export default class ScanScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasCameraPermission: null,
      barcodeData: ""
    };
  }

  async componentDidMount() {
    const { status } = await BarCodeScanner.requestPermissionsAsync();
    this.setState({ hasCameraPermission: status === "granted" });
  }

  handleBarCodeScanned = async ({ type, data }) => {
    let qrcodeData = JSON.parse(data);
    qrcodeData.map(robotName => {
      this.props.navigation.navigate('QrcodeData', {
        data: robotName.robotName
      })
    });
  };

  render() {
    const { hasCameraPermission, barcodeData } = this.state;
    if (hasCameraPermission === null) {
      return <Text>Requesting for camera permission</Text>;
    }
    if (hasCameraPermission === false) {
      return <Text>No access to camera</Text>;
    }
    // if (barcodeData !== "") {
    //   // return <Images barcodeData={barcodeData} />;
    //   return this.props.navigation.navigate('QrcodeData', {
    //     data: this.state.barcodeData
    //   })
    // }
    return (
      <View style={styles.container}>
        <BarCodeScanner
          onBarCodeScanned={
            this.state.handleBarCodeScanned ? null : this.handleBarCodeScanned
          }
          style={StyleSheet.absoluteFill}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  }
});

AppRegistry.registerComponent("ScanScreen", () => ScanScreen);