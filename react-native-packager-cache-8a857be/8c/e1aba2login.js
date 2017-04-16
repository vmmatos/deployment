

'use strict';

var _jsxFileName = '/home/myprojects/work/04_rethink_express_chat/06_app_3/pevvV2_1/src/includes/views/login.js';

var _react = require('react');

var _react2 = babelHelpers.interopRequireDefault(_react);

var _reactNative = require('react-native');

var _firebase = require('firebase');

var _firebase2 = babelHelpers.interopRequireDefault(_firebase);

var _common = require('../styles/common.css');

var _common2 = babelHelpers.interopRequireDefault(_common);

var width = _reactNative.Dimensions.get('window').width - 40;

var onButtonPress = function onButtonPress(route, nav, routes) {

	console.log('Button SIGN UP has been pressed! ' + route.index);

	if (route.index === 0) {
		nav.push(routes[1]);
		return _react2.default.createElement(SignUp, { navigator: navigator, __source: {
				fileName: _jsxFileName,
				lineNumber: 21
			}
		});
	} else {
		nav.pop();
		return _react2.default.createElement(SignIn, { navigator: navigator, __source: {
				fileName: _jsxFileName,
				lineNumber: 24
			}
		});
	}
};

var SignUp = _react2.default.createClass({
	displayName: 'SignUp',
	render: function render() {

		return _react2.default.createElement(
			_reactNative.View,
			{ style: _common2.default.container, __source: {
					fileName: _jsxFileName,
					lineNumber: 36
				}
			},
			_react2.default.createElement(
				_reactNative.Text,
				{
					__source: {
						fileName: _jsxFileName,
						lineNumber: 37
					}
				},
				'Sign Up?'
			)
		);
	}
});

var SignIn = _react2.default.createClass({
	displayName: 'SignIn',
	render: function render() {

		return _react2.default.createElement(
			_reactNative.View,
			{ style: _common2.default.container, __source: {
					fileName: _jsxFileName,
					lineNumber: 52
				}
			},
			_react2.default.createElement(
				_reactNative.Text,
				{
					__source: {
						fileName: _jsxFileName,
						lineNumber: 53
					}
				},
				'Sign In?'
			)
		);
	}
});

var Login = function (_Component) {
	babelHelpers.inherits(Login, _Component);

	function Login() {
		babelHelpers.classCallCheck(this, Login);
		return babelHelpers.possibleConstructorReturn(this, (Login.__proto__ || Object.getPrototypeOf(Login)).apply(this, arguments));
	}

	babelHelpers.createClass(Login, [{
		key: 'render',
		value: function render() {
			var _this2 = this;

			var routes = [{ title: 'SIGN UP', index: 0 }, { title: 'SIGN IN', index: 1 }];

			return _react2.default.createElement(_reactNative.Navigator, {
				initialRoute: routes[0],
				initialRouteStack: routes,
				configureScene: function configureScene(route, routeStack) {
					return _reactNative.Navigator.SceneConfigs.FadeAndroid;
				},
				renderScene: function renderScene(route, navigator) {
					return _react2.default.createElement(
						_reactNative.View,
						{ style: _common2.default.container, __source: {
								fileName: _jsxFileName,
								lineNumber: 76
							}
						},
						_react2.default.createElement(
							_reactNative.TouchableHighlight,
							{ onPress: function onPress() {
									onButtonPress(route, navigator, routes);
								},
								style: styles.btn_signUp,
								onHideUnderlay: function onHideUnderlay() {
									_this2.setState({ pressed: false });
								},
								onShowUnderlay: function onShowUnderlay() {
									_this2.setState({ pressed: true });
								}, __source: {
									fileName: _jsxFileName,
									lineNumber: 77
								}
							},
							_react2.default.createElement(
								_reactNative.Text,
								{
									__source: {
										fileName: _jsxFileName,
										lineNumber: 84
									}
								},
								route.title
							)
						)
					);
				},
				__source: {
					fileName: _jsxFileName,
					lineNumber: 71
				}
			});
		}
	}]);
	return Login;
}(_react.Component);

var styles = _reactNative.StyleSheet.create({
	btn_signUp: {
		alignItems: 'center',
		backgroundColor: 'transparent',
		borderColor: 'blue',
		borderRadius: 10,
		borderWidth: 1,
		flexDirection: 'row',
		height: 50,
		justifyContent: 'center',
		overflow: 'hidden',
		width: width
	}
});

module.exports = Login;