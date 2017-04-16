/* LOGIN class */

'use strict';

import React, { Component } from 'react';
import { StyleSheet, Text, View, Alert, Dimensions, TouchableHighlight, Navigator } from 'react-native';
import firebase from 'firebase';

// import SignUp from '../views/signup';

import commonStyle from '../styles/common.css'

var width 		= Dimensions.get('window').width - 40;

var onButtonPress 	= (route, nav, routes) => {

	console.log('Button SIGN UP has been pressed! ' + route.index);

	if (route.index === 0) { 
		nav.push(routes[1]); 
		return <SignUp navigator={navigator} />
	} else { 
		nav.pop(); 
		return <SignIn navigator={navigator} />
	}
};

var SignUp = React.createClass({
 /* _handlePress() {
    this.props.navigator.push({id: 2,});
  },*/

	render () {

  		return (
			<View style={commonStyle.container}>
				<Text>Sign Up?</Text>
			</View>
		)

	}
});

var SignIn = React.createClass({
 /* _handlePress() {
    this.props.navigator.push({id: 2,});
  },*/

	render () {

  		return (
			<View style={commonStyle.container}>
				<Text>Sign In?</Text>
			</View>
		)

	}
});

class Login extends Component {

	render () {

		const routes = [
			{title: 'SIGN UP', index: 0}, 
			{title: 'SIGN IN', index: 1}, 
		];

		return (
			//http://stackoverflow.com/questions/32918666/example-of-navigation-between-views-in-react-native-android
			<Navigator 
				initialRoute={routes[0]} 
				initialRouteStack={routes}
				configureScene={(route, routeStack) => Navigator.SceneConfigs.FadeAndroid} //effects
				renderScene={(route, navigator) =>
					<View style={commonStyle.container}>
						<TouchableHighlight onPress={() => {
                				onButtonPress(route, navigator, routes);
              				}
          				}
          					style={styles.btn_signUp}
          					onHideUnderlay={()=>{this.setState({pressed: false})}}
          					onShowUnderlay={()=>{this.setState({pressed: true})}}>
              					<Text>{route.title}</Text>
          				</TouchableHighlight>
          			</View>
      			}
			/>
		)

	}
}

const styles = StyleSheet.create({
	btn_signUp: {
		alignItems: 'center',
		backgroundColor: 'transparent',
		borderColor: 'blue',	
   		borderRadius: 10,
   		borderWidth: 1,
   		flexDirection: 'row',
   		height: 50,
	    justifyContent: 'center',
   		overflow: 'hidden',
   		width: width
	},
});

module.exports = Login;