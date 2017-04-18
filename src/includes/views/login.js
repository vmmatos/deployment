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
	Navigator,
	TextInput,
	Button
} from 'react-native';

import firebase from 'firebase';

import commonStyle from '../styles/common.css';

/***********************************************/

const width = Dimensions.get('window').width - 40;

// NOVO REGISTO
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
					style={styles.primaryButton}
					onHideUnderlay={()=>{this.setState({pressed: false})}}
					onShowUnderlay={()=>{this.setState({pressed: true})}}>
					<Text style={styles.primaryButtonTxt}>ENTRAR</Text>
				</TouchableHighlight>
			</View>
		)

	}
});

// ENTRADA
var SignIn = React.createClass({

	_handlePress() {
    	this.props.navigator.push({index: 1,});
    },

	render () {

  		return (

			<View style={commonStyle.container}>

				<View style={styles.viewForm}>

					<TextInput
				        style={styles.inputFields}
				        onChangeText={(text) => this.setState({text})}
				        placeholder="Email"
				        placeholderTextColor="#666"
				        keyboardType="email-address"
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
						<Text style={styles.primaryButtonTxt}>ENTRAR</Text>
					</TouchableHighlight>

					<TouchableHighlight onPress={() => {
							this._handlePress();
							}
						}
						style={styles.primaryButton}
						onHideUnderlay={()=>{this.setState({pressed: false})}}
						onShowUnderlay={()=>{this.setState({pressed: true})}}>
						<Text style={styles.primaryButtonTxt}>NOVO REGISTO</Text>
					</TouchableHighlight>

				</View>

			</View>
		)

	}
});

// MAIN
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
		padding: 5
	},
});

module.exports = Login;