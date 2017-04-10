'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;
var _jsxFileName = '/home/myprojects/work/04_rethink_express_chat/06_app_3/pevvV2_1/App.js';

var _react = require('react');

var _react2 = babelHelpers.interopRequireDefault(_react);

var _reactNative = require('react-native');

var _firebase = require('firebase');

var _firebase2 = babelHelpers.interopRequireDefault(_firebase);

var _firebase3 = require('./src/includes/config/firebase/firebase');

var _firebase4 = babelHelpers.interopRequireDefault(_firebase3);

var _login = require('./src/includes/views/login');

var _login2 = babelHelpers.interopRequireDefault(_login);

var _common = require('./src/includes/styles/common.css');

var _common2 = babelHelpers.interopRequireDefault(_common);

var App = function (_Component) {
  babelHelpers.inherits(App, _Component);

  function App(props) {
    babelHelpers.classCallCheck(this, App);

    var _this = babelHelpers.possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

    _firebase4.default.initialise();

    _this.getInitialView();

    _this.state = {
      userLoaded: false,
      initialView: null
    };

    _this.getInitialView = _this.getInitialView.bind(_this);

    return _this;
  }

  babelHelpers.createClass(App, [{
    key: 'getInitialView',
    value: function getInitialView() {
      var _this2 = this;

      _firebase2.default.auth().onAuthStateChanged(function (user) {

        var initialView = user ? "Home" : "Login";

        _this2.setState({
          userLoaded: true,
          initialView: initialView
        });
      });
    }
  }, {
    key: 'render',
    value: function render() {

      if (this.state.userLoaded) {

        return _react2.default.createElement(_reactNative.Navigator, {
          initialRoute: { name: this.state.initialView },
          renderScene: App.renderScene,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 64
          }
        });
      } else {
        return null;
      }
    }
  }], [{
    key: 'renderScene',
    value: function renderScene(route, navigator) {

      switch (route.name) {

        case "Login":
          return _react2.default.createElement(_login2.default, { navigator: navigator, __source: {
              fileName: _jsxFileName,
              lineNumber: 51
            }
          });
          break;

      }
    }
  }]);
  return App;
}(_react.Component);

exports.default = App;


_reactNative.AppRegistry.registerComponent('pevvApp01', function () {
  return App;
});