

'use strict';

var _jsxFileName = '/home/myprojects/work/04_rethink_express_chat/06_app_3/pevvV2_1/src/includes/views/login.js';

var _react = require('react');

var _react2 = babelHelpers.interopRequireDefault(_react);

var _reactNative = require('react-native');

var _firebase = require('firebase');

var _firebase2 = babelHelpers.interopRequireDefault(_firebase);

var _common = require('../styles/common.css');

var _common2 = babelHelpers.interopRequireDefault(_common);

var Login = function (_Component) {
	babelHelpers.inherits(Login, _Component);

	function Login() {
		babelHelpers.classCallCheck(this, Login);
		return babelHelpers.possibleConstructorReturn(this, (Login.__proto__ || Object.getPrototypeOf(Login)).apply(this, arguments));
	}

	babelHelpers.createClass(Login, [{
		key: 'render',
		value: function render() {

			return _react2.default.createElement(
				_reactNative.View,
				{ style: _common2.default.container, __source: {
						fileName: _jsxFileName,
						lineNumber: 16
					}
				},
				_react2.default.createElement(
					_reactNative.Text,
					{
						__source: {
							fileName: _jsxFileName,
							lineNumber: 17
						}
					},
					'FORMULARIO_a_serio'
				)
			);
		}
	}]);
	return Login;
}(_react.Component);

module.exports = Login;