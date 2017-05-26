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
	StatusBar,
	Linking
} from 'react-native';

import firebase from 'firebase';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import DatePicker from 'react-native-datepicker';
import ValidationComponent from 'react-native-form-validator';

import { callToast, callToastLong } from '../common/toast';
import { encrypt } from '../common/encryption';
import callLoading from '../common/loading';

import commonStyle from '../styles/common.css';

/***********************************************/

const width 		= Dimensions.get('window').width - 40,
	returnHomePage 	= 'true';

let policyUrl = 'http://google.com';

// MAIN
export default class LoginForm extends ValidationComponent {

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

		this._handlePress 	= this._handlePress.bind(this);
		this._onSubmit 		= this._onSubmit.bind(this);
	}

	signup = () => {

		firebase.auth().createUserWithEmailAndPassword(this.state.email, encrypt(this.state.password))
		.then(function(user) {

			console.log('SUCESS'); // funca

		})
		.catch(function(error) {

			var errorCode 	 	= error.code,
				errorMessage 	= error.message,
				reportError 	= ( errorCode === 'auth/email-already-in-use' ) ? 'Este email já é usado por uma outra conta' : '';

			if (reportError) {
				callToastLong(reportError);
			}

			console.log('ERROR CREATE USER - ' + errorMessage + ' - ' + errorCode);

			return returnHomePage = 'false';

		});

	}

    _handlePress = () => {
    	this.props.navigator.pop();
    }

    _onSubmit = () => {
    	const { email, password, name, date } = this.state;

    	this.validate({
			email: {email: true, required: true},
			password: {minlength:6, required: true},
			name: {required: true},
			date: {required: true, date: 'DD-MM-YYYY'}
		});

		if ( this.errors.length > 0 ) {
			callToastLong(this.getErrorMessages());
		} else {

			this.setState({
				loading: true
			});

			this.signup();

			if (returnHomePage === 'true') {

				this.setState({
					loading: false
				});

				this.props.navigator.push({title: 'HOME', index: 2});
			}
		}

    }

	render () {

  		return (

			<KeyboardAvoidingView behavior='padding' style={styles.container}>

				<StatusBar
					barStyle="light-content"
				/>

				{callLoading(this.state.loading)}

				<TextInput
					style={commonStyle.inputFields}
					placeholder="Email"
              		placeholderTextColor="rgba(255,255,255,0.5)"
					onChangeText={(email) => this.setState({email})}
					value={this.state.email}
					keyboardType="email-address"
              		returnKeyType="next"
              		onSubmitEditing={() => this.passwordInput.focus()}
              		autoCapitalize="none"
              		autoCorrect={false}
					underlineColorAndroid="transparent"
				/>

				<TextInput
					style={commonStyle.inputFields}
					placeholder="Palavra-Chave"
					placeholderTextColor="rgba(255,255,255,0.5)"
					onChangeText={(password) => this.setState({password})}
					value={this.state.password}
					secureTextEntry={true}
					ref={(input) => this.passwordInput = input}
					returnKeyType="next"
              		onSubmitEditing={() => this.nameInput.focus()}
              		autoCapitalize="none"
              		autoCorrect={false}
					underlineColorAndroid="transparent"
				/>

				<TextInput
					style={commonStyle.inputFields}
					placeholder="Primeiro e Ultimo Nome"
					placeholderTextColor="rgba(255,255,255,0.5)"
					onChangeText={(name) => this.setState({name})}
					value={this.state.name}
					ref={(input) => this.nameInput = input}
					returnKeyType="next"
					autoCapitalize='words'
					autoCorrect={false}
					underlineColorAndroid="transparent"
				/>

				<DatePicker
					style={styles.inputFieldsDatePicker}
					date={this.state.date}
					mode="date"
					placeholder="Data de Nascimento"
					format="DD-MM-YYYY"
					minDate="01-01-1900"
					maxDate="31-12-2080"
					confirmBtnText="Confirmar"
					cancelBtnText="Cancelar"
					showIcon={false}
					customStyles={{
						dateInput: {
							alignItems: 'flex-start',
							borderColor: 'transparent',
						},
						dateText: {
							color: '#ffffff',
						},
						placeholderText: {
							color: 'rgba(255,255,255,0.5)'
						},
					}}
					onDateChange={(date) => {this.setState({date: date})}}
				/>

				<TouchableOpacity onPress={() => {
						this._onSubmit();
						}
					}
					style={commonStyle.buttonContainer}
					onHideUnderlay={()=>{this.setState({pressed: false})}}
					onShowUnderlay={()=>{this.setState({pressed: true})}}>
					<Text style={commonStyle.buttonTxt}>REGISTAR UTILIZADOR</Text>
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
					<Text style={commonStyle.buttonTxt}>INICIAR SESSÃO</Text>
				</TouchableOpacity>

				<View style={styles.middleTxtContainer}>
					<Text style={[styles.middleTxt, styles.policyTxt]}
						onPress={() => Linking.openURL(policyUrl)}>
						Ao activar com este serviço concorda com os Termos de Serviço e com a Politica de Privacidade.
					</Text>
				</View>

			</KeyboardAvoidingView>
		)

	}
}

const styles = StyleSheet.create({
	container: {
		padding: 20
	},

	inputFieldsDatePicker: {
		backgroundColor: 'rgba(255,255,255,0.2)',
        height: 50,
        marginBottom: 8,
		paddingLeft: 10,
		paddingTop: 3,
		width: width
	},

	middleTxtContainer: {
		alignItems: 'center',
        flexGrow: 1,
        justifyContent: 'center',
	},

	middleTxt: {
		color: '#fff',
		paddingVertical: 15,
	},

	policyTxt: {
		fontSize: 12,
        textDecorationLine: 'underline'
	}

});

module.exports = LoginForm;