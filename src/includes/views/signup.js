/* SIGNUP class */

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

import NewUserForm from '../views/newUserForm';

import commonStyle from '../styles/common.css';

/***********************************************/

const width = Dimensions.get('window').width - 40;

var InternetStatusView = require('react-native-internet-status-view')

// MAIN
export default class SignUp extends Component {

	constructor(props) {
		super(props);
	
		this.state = {
			loading  : false,
			email 	 : '',
			password : '',
			name 	 : '',
			date 	 : '',
			response : ''
		};

	}

	render () {

  		return (

			<View style={commonStyle.container}>

				<InternetStatusView
					textToDisplay="Sorry You're Not Connected to the Internet!"
				/>

				<View style={commonStyle.logoContainer}>
					<Image
						style={commonStyle.logo}
						source={require('../imgs/logomarca-restaurante.png')} />

					<Text style={styles.title}>Onde a comida é boa!</Text>
				</View>

				<View style={styles.formContainer}>
					<NewUserForm navigator={navigator} {...this.props} deviceLocale="pt" />
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

module.exports = SignUp;