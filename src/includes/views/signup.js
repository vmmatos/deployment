/* SIGNUP class */

'use strict';

import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import commonStyle from '../styles/common.css'

class SignUp extends Component {

	render () {

		return (
			<View style={commonStyle.container}>
				<Text>Sign Up?</Text>
			</View>
		)

	}
}


const styles = StyleSheet.create({
});

module.exports = SignUp;