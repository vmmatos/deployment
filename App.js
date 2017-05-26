'use strict';

import React, { Component } from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  AppRegistry, 
  Navigator 
} from 'react-native';

import firebase from 'firebase';

import Firebase from './src/includes/config/firebase/firebase';

import Login from './src/includes/views/login';
import Home from './src/includes/views/home';

import commonStyle from './src/includes/styles/common.css'

export default class App extends Component {

  constructor (props) {

    super(props);

    Firebase.initialise();

    this.getInitialView();

    this.state = {
      userLoaded: false,
      initialView: null
    };

    this.getInitialView = this.getInitialView.bind(this);

  }

  getInitialView () {

    firebase.auth().onAuthStateChanged((user) => {

      let initialView = user ? "Home" : "Login";

      this.setState({
        userLoaded: true,
        initialView: initialView
      })

    });

  }

  static renderScene (route, navigator) {

    console.log('ESTADO - ' + route.name);
    
    switch (route.name) {

      case "Login":
        return (<Login navigator={navigator} {...route.passProps} />);
        break;

      case "Home":
        return (<Home navigator={navigator} {...route.passProps} />);
        break;

    }

  }

  render() {

    if (this.state.userLoaded) {

      return (

      <Navigator
        initialRoute={{name: this.state.initialView}}
        renderScene={App.renderScene}
        /*configureScene={Initial.configureScene}*/
      />);

    } else {
      return null;
    }

  }
}

AppRegistry.registerComponent('pevvApp01', () => App)