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
	Animated
} from 'react-native';

import firebase from 'firebase';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import DatePicker from 'react-native-datepicker'

import commonStyle from '../styles/common.css';

/***********************************************/

const width = Dimensions.get('window').width - 40;

let color = {
	currentColor: '#00ffff',
	errorColor: '#ff0000'
}

// MAIN
class SignUp extends Component {

	constructor(props) {
		super(props);
	
		this.state = {
			loading: false,
			email: '',
			password: '',
			name: '',
			date: ''
		};
	}

	_handlePress() {
    	this.props.navigator.pop();
    }

    _handleMailChange(evt) {
    	alert('mail - ' + evt);
    	if (evt === 'ola') {
    		this.setState({color: '#ff0000'});
    		console.log('ola--');
    	} else {
    		console.log('NOT ola!!');
    	}
    }

	render () {

  		return (

			<View style={commonStyle.container}>

				<View style={styles.viewForm}>

					<TouchableHighlight onPress={() => {
							// this._handlePress();
							}
						}
						style={styles.fbButton}
						onHideUnderlay={()=>{this.setState({pressed: false})}}
						onShowUnderlay={()=>{this.setState({pressed: true})}}>
						<Text style={styles.primaryButtonTxt}>REGISTAR COM FACEBOOK</Text>
					</TouchableHighlight>

					<TouchableHighlight onPress={() => {
							// this._handlePress();
							}
						}
						style={styles.gpButton}
						onHideUnderlay={()=>{this.setState({pressed: false})}}
						onShowUnderlay={()=>{this.setState({pressed: true})}}>
						<Text style={styles.primaryButtonTxt}>REGISTAR COM O GOOGLE</Text>
					</TouchableHighlight>

				</View>

				<View style={styles.viewForm}>

					<TextInput
				    	style={[styles.inputFields, {color: color.currentColor}]}
				    	onChangeText={this._handleMailChange}
				    	placeholder="Email"
				    	placeholderTextColor="#666"
				    	keyboardType="email-address"
				    	underlineColorAndroid="transparent"
				    />

				    <TextInput
				    	style={styles.inputFields}
				    	onChangeText={(text) => this.setState({text})}
				    	placeholder="Palavra-Chave"
				    	placeholderTextColor="#666"
				    	secureTextEntry={true}
				    />

				    <TextInput
				    	style={styles.inputFields}
				    	onChangeText={(text) => this.setState({text})}
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
							// this._handlePress();
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