/* LOGIN FORM class */

'use strict';

import React, { Component } from 'react';
import { 
	StyleSheet, 
	Text, 
	View,
	TextInput,
	Dimensions,
	TouchableOpacity,
	KeyboardAvoidingView,
	StatusBar
} from 'react-native';

import firebase from 'firebase';

import commonStyle from '../styles/common.css';

/***********************************************/

const width = Dimensions.get('window').width - 40;

// MAIN
export default class LoginForm extends Component {

	constructor(props) {
		super(props);

		this._handlePress = this._handlePress.bind(this);
	}

	_handlePress() {
    	this.props.navigator.push({index: 1,});
    }

	render () {

  		return (

			<KeyboardAvoidingView behavior='padding' style={styles.container}>

				<StatusBar
					barStyle="light-content"
				/>

				<TextInput
              		style={commonStyle.inputFields}
              		/*onChangeText={this._handleMailChange}*/
              		placeholder="Email"
              		placeholderTextColor="rgba(255,255,255,0.5)"
              		keyboardType="email-address"
              		returnKeyType="next"
              		onSubmitEditing={() => this.passwordInput.focus()}
              		autoCapitalize="none"
              		autoCorrect={false}
              		underlineColorAndroid="transparent"
            	/>

            	<TextInput
					style={commonStyle.inputFields}
					onChangeText={(text) => this.setState({text})}
					placeholder="Palavra-Chave"
					placeholderTextColor="rgba(255,255,255,0.5)"
					returnKeyType="go"
					ref={(input) => this.passwordInput = input}
					secureTextEntry
	            />

	            <TouchableOpacity onPress={() => {
						// this._handlePress();
						}
					}
					style={commonStyle.buttonContainer}
					onHideUnderlay={()=>{this.setState({pressed: false})}}
					onShowUnderlay={()=>{this.setState({pressed: true})}}>
					<Text style={commonStyle.buttonTxt}>INICIAR SESSÃO</Text>
				</TouchableOpacity>

				<View style={styles.middleTxtContainer}>
					<Text style={styles.middleTxt}>ou</Text>
				</View>

				<TouchableOpacity onPress={() => {
							this._handlePress();
						}
					}
					style={commonStyle.buttonContainer}
					onHideUnderlay={()=>{this.setState({pressed: false})}}
					onShowUnderlay={()=>{this.setState({pressed: true})}}>
					<Text style={commonStyle.buttonTxt}>NOVO REGISTO</Text>
				</TouchableOpacity>

			</KeyboardAvoidingView>
		)

	}
}

const styles = StyleSheet.create({
	container: {
		padding: 20
	},

	middleTxtContainer: {
		alignItems: 'center',
        flexGrow: 1,
        justifyContent: 'center',
	},

	middleTxt: {
		color: '#fff',
		paddingBottom: 8,
	}
});

module.exports = LoginForm;