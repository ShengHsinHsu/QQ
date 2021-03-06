import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  Button,
  TouchableHighlight,
  View
} from 'react-native';

import { StackNavigator } from 'react-navigation';

var QRCode = require('react-native-qrcode');

export default class QR extends Component {
  static navigationOptions = {
      title: 'Chat with Lucy',
  };
  
  constructor(props){
    super(props);
    this.state = {
    }
  }

  render() {

    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.ios.js
        </Text>
        <Text style={styles.instructions}>
          Press Cmd+R to reload,{'\n'}
          Cmd+D or shake for dev menu
        </Text>
        <Text style={styles.welcome}>
          This is the example for QRCODE
        </Text>
        <TouchableHighlight onPress = {this._onPressButton}>
        <View style={styles.button}>
          <Text style= {styles.welcome}>
            App page botton
          </Text>
        </View>
        </TouchableHighlight>
        <View style={styles.imgqrcode}>
          <QRCode
                    value={this.state.text}
                    size={200}
                    bgColor='black'
                    fgColor='white'/>
      </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  imgqrcode: {
    marginTop: 100,
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'yellow',
  }
});

module.exports = 'App';
