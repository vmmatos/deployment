

'use strict';

var _jsxFileName = '/home/myprojects/work/04_rethink_express_chat/06_app_3/pevvV2_1/src/includes/views/signup.js';

var _react = require('react');

var _react2 = babelHelpers.interopRequireDefault(_react);

var _reactNative = require('react-native');

var _common = require('../styles/common.css');

var _common2 = babelHelpers.interopRequireDefault(_common);

var SignUp = function (_Component) {
	babelHelpers.inherits(SignUp, _Component);

	function SignUp() {
		babelHelpers.classCallCheck(this, SignUp);
		return babelHelpers.possibleConstructorReturn(this, (SignUp.__proto__ || Object.getPrototypeOf(SignUp)).apply(this, arguments));
	}

	babelHelpers.createClass(SignUp, [{
		key: 'render',
		value: function render() {

			return _react2.default.createElement(
				_reactNative.View,
				{ style: _common2.default.container, __source: {
						fileName: _jsxFileName,
						lineNumber: 15
					}
				},
				_react2.default.createElement(
					_reactNative.Text,
					{
						__source: {
							fileName: _jsxFileName,
							lineNumber: 16
						}
					},
					'Sign Up?'
				)
			);
		}
	}]);
	return SignUp;
}(_react.Component);

var styles = _reactNative.StyleSheet.create({});

module.exports = SignUp;