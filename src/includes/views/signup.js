/* SIGNUP class */

'use strict';

import React, { Component } from 'react';
import { 
	StyleSheet, 
	Text, 
	View, 
	Alert, 
	Dimensions, 
	TouchableHighlight, 
	Navigator,
	TextInput,
	Button,
	Animated,
	Linking
} from 'react-native';

import firebase from 'firebase';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import DatePicker from 'react-native-datepicker';
import ValidationComponent from 'react-native-form-validator';
import FireAuth from 'simple-firebase-auth';

import { callToast, callToastLong } from '../common/toast';
import { encrypt } from '../common/encryption';

import commonStyle from '../styles/common.css';

/***********************************************/

const width = Dimensions.get('window').width - 40;

let color = {
	currentColor: '#00ffff',
	errorColor: '#ff0000'
};

// MAIN
class SignUp extends ValidationComponent {

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

		// this.signup = this.signup.bind(this);
	}

	async signup() {

		// console.log('this.email - ' + this.state.email + ' -- ' + encrypt(this.state.password));

		/*try {

			await firebase.auth().createUserWithEmailAndPassword(this.state.email, encrypt(this.state.password));

			this.setStage({
				response: 'account create'
			})

		} catch (error) {

			this.setStage({
				response: 'error'
			});

			console.log('ERROR - ' + error);

		}*/

		await firebase.auth().createUserWithEmailAndPassword(this.state.email, encrypt(this.state.password))
		.then(function(user) {
			console.log('SUCESS - ' + user); // funca

			this.setStage({
				email 	 : '',
				password : '',
				name 	 : '',
				date 	 : '',
				response: 'account create'
			})

		})
		.catch(function(error) {
			var errorCode = error.code;
		 	var errorMessage = error.message;

		 	this.setStage({
		 		response: 'error'
			});

			console.log('ERROR - ' + errorMessage);
		});

	}

	async _signupGP() {

		var provider = new firebase.auth.GoogleAuthProvider();
		// var providerGP = new firebase.auth.GoogleAuthProvider().credential();

		console.log('pder =>> ', provider)

		/*await firebase.auth().signInWithPopup(provider)
		.then(function(result) {
		  // This gives you a Google Access Token. You can use it to access the Google API.
		  var token = result.credential.accessToken;
		  // The signed-in user info.
		  var user = result.user;
		  // ...

		  console.log('GP SUCESS - ' + token + ' .. ' + user);
		})
		.catch(function(error) {
		  // Handle Errors here.
		  var errorCode = error.code;
		  var errorMessage = error.message;
		  // The email of the user's account used.
		  var email = error.email;
		  // The firebase.auth.AuthCredential type that was used.
		  var credential = error.credential;
		  // ...

		  console.log('GP ERROR - ' + errorMessage);
		});*/

	}

	/*register = () => {
  const { email, password, firstName, lastName } = this.state;
  FireAuth.register(email, password, { firstName, lastName });
}*/

	async _signupFB() {
		var provider = new firebase.auth.FacebookAuthProvider();

		firebase.auth().signInWithPopup(provider).then(function(result) {
  // This gives you a Facebook Access Token. You can use it to access the Facebook API.
  var token = result.credential.accessToken;
  // The signed-in user info.
  var user = result.user;
  // ...
  console.log('SUCESSO');
}).catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  // The email of the user's account used.
  var email = error.email;
  // The firebase.auth.AuthCredential type that was used.
  var credential = error.credential;
  // ...
  console.log('ERRO - ' + errorMessage);
});
	}

	_handlePress() {
    	this.props.navigator.pop();
    }

    _onSubmit() {

    	const { email, password, name, date } = this.state;

    	// encrypt(password)

		/*this.validate({
			email: {email: true, required: true},
			password: {minlength:6, required: true},
			name: {required: true},
			date: {required: true, date: 'DD-MM-YYYY'}
		});

		if ( this.errors.length > 0 ) {
			callToastLong(this.getErrorMessages());
		} else {*/

			this.signup()

			// encrypar pass e enviar para firebase == falta traduzir frases de erro
		//}

    }

	render () {

  		return (

			<View style={commonStyle.container}>

				<View style={styles.viewForm}>

					<TouchableHighlight onPress={() => {
								this._signupFB();
							}
						}
						style={styles.fbButton}
						onHideUnderlay={()=>{this.setState({pressed: false})}}
						onShowUnderlay={()=>{this.setState({pressed: true})}}>
						<Text style={styles.primaryButtonTxt}>REGISTAR COM FACEBOOK</Text>
					</TouchableHighlight>

					<TouchableHighlight onPress={() => {
								this._signupGP();
							}
						}
						style={styles.gpButton}
						onHideUnderlay={()=>{this.setState({pressed: false})}}
						onShowUnderlay={()=>{this.setState({pressed: true})}}>
						<Text style={styles.primaryButtonTxt}>REGISTAR COM O GOOGLE</Text>
					</TouchableHighlight>

				</View>

				<View style={styles.viewForm}>

					<View style={styles.containerMiddle}>
						<Text style={styles.middleTxt}>Registar-se com um email</Text>
					</View>

					<TextInput
				    	style={styles.inputFields}
				    	onChangeText={(email) => this.setState({email})}
				    	value={this.state.email}
				    	placeholder="Email"
				    	placeholderTextColor="#666"
				    	keyboardType="email-address"
				    	underlineColorAndroid="transparent"
				    />

				    <TextInput
				    	style={styles.inputFields}
				    	onChangeText={(password) => this.setState({password})}
				    	value={this.state.password}
				    	placeholder="Palavra-Chave"
				    	placeholderTextColor="#666"
				    	secureTextEntry={true}
				    />

				    <TextInput
				    	style={styles.inputFields}
				    	onChangeText={(name) => this.setState({name})}
				    	value={this.state.name}
				    	placeholder="Primeiro e Ultimo Nome"
				    	placeholderTextColor="#666"
				    	autoCapitalize='words'
				    	underlineColorAndroid="transparent"
				    />

				    <DatePicker
				        style={[styles.inputFields, styles.inputFieldsDatePicker]}
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
				        	dateInput:{
				        		alignItems: 'flex-start',
				        		borderColor: 'transparent',
				        	},
				        	placeholderText: {
				        		color: '#666'
				        	},
				        }}
				        onDateChange={(date) => {this.setState({date: date})}}
				      />

					<TouchableHighlight onPress={() => {
							this._onSubmit();
							}
						}
						style={styles.primaryButton}
						onHideUnderlay={()=>{this.setState({pressed: false})}}
						onShowUnderlay={()=>{this.setState({pressed: true})}}>
						<Text style={styles.primaryButtonTxt}>REGISTAR</Text>
					</TouchableHighlight>

					<View style={styles.containerMiddle}>
						<Text style={styles.middleTxt}>ou</Text>
					</View>

					<TouchableHighlight onPress={() => {
							this._handlePress();
							}
						}
						style={styles.primaryButton}
						onHideUnderlay={()=>{this.setState({pressed: false})}}
						onShowUnderlay={()=>{this.setState({pressed: true})}}>
						<Text style={styles.primaryButtonTxt}>ENTRAR</Text>
					</TouchableHighlight>

					<Text style={{color: 'blue'}}
					      onPress={() => Linking.openURL('http://google.com')}>
					  Ao activar com este serviço concorda com os Termos de Serviço e com a Politica de Privacidade.
					</Text>

				</View>

			</View>
		)

	}
}


const styles = StyleSheet.create({
	alignCenterBtns: {
		alignItems: 'center',
		flexDirection: 'row',
		justifyContent: 'space-around',
	},

	primaryButton: {
		alignItems: 'center',
		backgroundColor: '#0dbbee',
		borderColor: 'transparent',	
   		borderRadius: 10,
   		borderWidth: 1,
   		flexDirection: 'row',
   		height: 40,
	    justifyContent: 'center',
	    marginBottom: 8,
   		width: width
	},

	fbButton: {
		alignItems: 'center',
		backgroundColor: '#3b5998',
		borderColor: 'transparent',	
   		borderRadius: 10,
   		borderWidth: 1,
   		flexDirection: 'row',
   		height: 40,
	    justifyContent: 'center',
	    marginBottom: 8,
   		width: width
	},

	gpButton: {
		alignItems: 'center',
		backgroundColor: '#d34836',
		borderColor: 'transparent',	
   		borderRadius: 10,
   		borderWidth: 1,
   		flexDirection: 'row',
   		height: 40,
	    justifyContent: 'center',
	    marginBottom: 8,
   		width: width
	},

	primaryButtonTxt: {
   		color: '#fff'
	},

	iconBtn: {
		fontSize: 18,
		paddingRight: 10,
	},

	containerMiddle: {
		flexDirection: 'row',
	},

	middleTxt: {
		flex:1,
   		fontSize: 16,
	    marginBottom: 10,
	    textAlign: 'center',
	    width: 50
	},

	viewForm: {
		marginBottom: 20,
		width: width
	},

	inputFields: {
		backgroundColor: '#f1f1f1',
		borderWidth: 1,
		height: 45,
		marginBottom: 8,
		padding: 5
	},

	inputFieldsDatePicker: {
		paddingTop: -2,
		width: width,
	},
});

module.exports = SignUp;