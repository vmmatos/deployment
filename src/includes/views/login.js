/* LOGIN class */

'use strict';

import React, { Component } from 'react';
import { StyleSheet, Text, View, Alert, Dimensions, TouchableHighlight, Navigator } from 'react-native';
import firebase from 'firebase';

import commonStyle from '../styles/common.css'

const width 		= Dimensions.get('window').width - 40,
	onButtonPress 	= (route, nav, routes) => { 
		console.log('Button SIGN UP has been pressed! ' + route.index);

		if (route.index === 0) { 
			nav.push(routes[1]); 
		} else { 
			nav.pop(); 
		}
	};

class Login extends Component {

	render () {

		const routes = [
			{title: 'SIGN UP', index: 0}, 
			{title: 'SIGN IN', index: 1}, 
		];

		return (
			
			<Navigator 
				initialRoute={routes[0]} 
				initialRouteStack={routes}
				configureScene={(route, routeStack) => Navigator.SceneConfigs.FloatFromBottom} //effects
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