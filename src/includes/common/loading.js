/* LOADING functions */

'use strict';

import React, { Component } from 'react';
import { 
	View
} from 'react-native';

import Spinner from 'react-native-loading-spinner-overlay';

export default function callLoading(state) {

	return (
		<View style={{ flex: 1 }}>
			<Spinner visible={state} textContent={"Loading..."} textStyle={{color: '#FFF'}} />
		</View>
	);
}