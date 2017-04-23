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
// <FontAwesome name='trophy' />

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
			password: ''
		};
	}

	_handlePress() {
    	this.props.navigator.push({index: 1,});
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

					<TouchableHighlight onPress={() => {
							// this._handlePress();
							}
						}
						style={styles.primaryButton}
						onHideUnderlay={()=>{this.setState({pressed: false})}}
						onShowUnderlay={()=>{this.setState({pressed: true})}}>
						<Text style={styles.primaryButtonTxt}>REGISTAR</Text>
					</TouchableHighlight>

					<TouchableHighlight onPress={() => {
							this._handlePress();
							}
						}
						style={styles.primaryButton}
						onHideUnderlay={()=>{this.setState({pressed: false})}}
						onShowUnderlay={()=>{this.setState({pressed: true})}}>
						<Text style={styles.primaryButtonTxt}>ENTRAR_</Text>
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

	primaryButtonTxt: {
   		color: '#fff'
	},

	viewForm: {
		marginBottom: 20,
		width: width
	},

	inputFields: {
		height: 50,
		marginBottom: 8,
		padding: 5,
	},
});

module.exports = SignUp;