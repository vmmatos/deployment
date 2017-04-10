var _jsxFileName = '/home/myprojects/work/04_rethink_express_chat/06_app_3/pevvV2_1/node_modules/react-native-maps/components/MapUrlTile.js';

var _react = require('react');

var _react2 = babelHelpers.interopRequireDefault(_react);

var _reactNative = require('react-native');

var _decorateMapComponent = require('./decorateMapComponent');

var _decorateMapComponent2 = babelHelpers.interopRequireDefault(_decorateMapComponent);

var propTypes = babelHelpers.extends({}, _reactNative.View.propTypes, {
  urlTemplate: _react.PropTypes.string.isRequired,

  zIndex: _react.PropTypes.number
});

var MapUrlTile = function (_React$Component) {
  babelHelpers.inherits(MapUrlTile, _React$Component);

  function MapUrlTile() {
    babelHelpers.classCallCheck(this, MapUrlTile);
    return babelHelpers.possibleConstructorReturn(this, (MapUrlTile.__proto__ || Object.getPrototypeOf(MapUrlTile)).apply(this, arguments));
  }

  babelHelpers.createClass(MapUrlTile, [{
    key: 'render',
    value: function render() {
      var AIRMapUrlTile = this.getAirComponent();
      return _react2.default.createElement(AIRMapUrlTile, babelHelpers.extends({}, this.props, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        }
      }));
    }
  }]);
  return MapUrlTile;
}(_react2.default.Component);

MapUrlTile.propTypes = propTypes;

module.exports = (0, _decorateMapComponent2.default)(MapUrlTile, {
  componentType: 'UrlTile',
  providers: {
    google: {
      ios: _decorateMapComponent.SUPPORTED,
      android: _decorateMapComponent.USES_DEFAULT_IMPLEMENTATION
    }
  }
});