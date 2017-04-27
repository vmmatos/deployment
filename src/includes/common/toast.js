/* TOAST class */

'use strict';

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  Animated
} from 'react-native';

class Toasts extends Component {

  constructor(props) {
    super(props)
    this.animatedValue = new Animated.Value(-70)
  }

  callToast() {
    alert('xego ca?');
    /*Animated.timing(
      this.animatedValue,
      { 
        toValue: 0,
        duration: 350
      }).start(this.closeToast())*/
  }
  
  closeToast() {
    setTimeout(() => {
      Animated.timing(
      this.animatedValue,
      { 
        toValue: -70,
        duration: 350
      }).start()
    }, 2000)
  }

  render() {
    return (
      <View>
        <Animated.View  style={{ transform: [{ translateY: this.animatedValue }], height: 70, backgroundColor: 'green', position: 'absolute',left:0, top:0, right:0, justifyContent:  'center' }}>
          <Text style={{ marginLeft: 10,  color: 'white',  fontSize:16, fontWeight: 'bold' }}>
            Hello from Toast!
          </Text>
        </Animated.View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 70
  },
  buttonContainer: {
    marginTop:10
  }
});

module.exports = Toasts;