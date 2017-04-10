

'use strict';

var _jsxFileName = '/home/myprojects/work/04_rethink_express_chat/06_app_3/pevvV2_1/node_modules/react-native/Libraries/ReactNative/renderApplication.js';
var AppContainer = require('AppContainer');
var React = require('React');
var ReactNative = require('ReactNative');

var invariant = require('fbjs/lib/invariant');

require('BackAndroid');

function renderApplication(RootComponent, initialProps, rootTag) {
  invariant(rootTag, 'Expect to have a valid rootTag, instead got ', rootTag);
  ReactNative.render(React.createElement(
    AppContainer,
    { rootTag: rootTag, __source: {
        fileName: _jsxFileName,
        lineNumber: 34
      }
    },
    React.createElement(RootComponent, babelHelpers.extends({}, initialProps, {
      rootTag: rootTag,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35
      }
    }))
  ), rootTag);
}

module.exports = renderApplication;