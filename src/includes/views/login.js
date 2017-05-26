/* LOGIN class */

'use strict';

import React, { Component } from 'react';
import {
	Navigator,
} from 'react-native';

import SignIn from '../views/signin';
import SignUp from '../views/signup';
import Home from '../views/home';

// MAIN
class Login extends Component {

	static _renderScene (route, navigator) {

		if (route.index === 0) {
			return (<SignIn navigator={navigator} />);
		} else if (route.index === 1) {
			return <SignUp navigator={navigator} />
		} else {
			return <Home navigator={navigator} />
		}

	}

	render () {

		const routes = [
			{title: 'ENTRAR', index: 0}, 
			{title: 'REGISTAR', index: 1},
			{title: 'HOME', index: 2}, 
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

module.exports = Login;