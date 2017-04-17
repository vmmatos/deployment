/* LOGIN class */

'use strict';

import React, { Component } from 'react';
import { 
	StyleSheet, 
	Text, 
	View, 
	Alert, 
	Dimensions, 
	TouchableHighlight, 
	Navigator 
} from 'react-native';

import firebase from 'firebase';

import commonStyle from '../styles/common.css';

/***********************************************/

const width = Dimensions.get('window').width - 40;

var SignUp = React.createClass({

  	_handlePress() {
  		this.props.navigator.pop();
    },

	render () {

  		return (
			<View style={[commonStyle.container, styles.alignCenterBtns]}>
				<TouchableHighlight onPress={() => {
						this._handlePress();
						}
					}
					style={styles.btn_signUp}
					onHideUnderlay={()=>{this.setState({pressed: false})}}
					onShowUnderlay={()=>{this.setState({pressed: true})}}>
					<Text>ENTRAR</Text>
				</TouchableHighlight>
			</View>
		)

	}
});

var SignIn = React.createClass({

	_handlePress() {
    	this.props.navigator.push({index: 1,});
    },

	render () {

  		return (
			<View style={[commonStyle.container, styles.alignCenterBtns]}>
				<TouchableHighlight onPress={() => {
						this._handlePress();
						}
					}
					style={styles.btn_signUp}
					onHideUnderlay={()=>{this.setState({pressed: false})}}
					onShowUnderlay={()=>{this.setState({pressed: true})}}>
					<Text>REGISTAR</Text>
				</TouchableHighlight>
			</View>
		)

	}
});

class Login extends Component {

	static _renderScene (route, navigator) {

		if (route.index === 0) {
			return (<SignIn navigator={navigator} />);
		} else {
			return <SignUp navigator={navigator} />
		}

	}

	render () {

		const routes = [
			{title: 'ENTRAR', index: 0}, 
			{title: 'REGISTAR', index: 1}, 
		];

		return (
			<Navigator
				initialRoute={routes[0]}
				/*initialRouteStack={routes}*/
        		configureScene={(route, routeStack) => Navigator.SceneConfigs.FadeAndroid} //effects
				renderScene={Login._renderScene} />
			
		);

	}
}


const styles = StyleSheet.create({
	alignCenterBtns: {
		alignItems: 'center',
		flexDirection: 'row',
		justifyContent: 'space-around',
	},

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