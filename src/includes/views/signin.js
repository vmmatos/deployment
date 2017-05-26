/* SIGNIN class */

'use strict';

import React, { Component } from 'react';
import { 
	StyleSheet, 
	Text, 
	View, 
	Dimensions, 
	Navigator,
	Image
} from 'react-native';

import FontAwesome from 'react-native-vector-icons/FontAwesome';

import LoginForm from '../views/loginForm';

import commonStyle from '../styles/common.css';

/***********************************************/

const width = Dimensions.get('window').width - 40;

// MAIN
export default class SignIn extends Component {

	constructor(props) {
		super(props);
	
		this.state = {
			loading: false,
			email: '',
			password: ''
		};
	}

	render () {

  		return (

			<View style={commonStyle.container}>

				<View style={commonStyle.logoContainer}>
					<Image
						style={commonStyle.logo}
						source={require('../imgs/logomarca-restaurante.png')} />

					<Text style={styles.title}>Onde a comida é boa!</Text>
				</View>

				<View style={styles.formContainer}>
					<LoginForm navigator={navigator} {...this.props} />
				</View>

			</View>
		)

	}
}


const styles = StyleSheet.create({
	title: {
		color: '#fff',
		marginTop: -25,
		opacity: 0.6,
		textAlign: 'center',
		width: 130,
	}
});

module.exports = SignIn;