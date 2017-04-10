
'use strict';

var invariant = require('fbjs/lib/invariant');
var NativeEventEmitter = require('NativeEventEmitter');
var KeyboardObserver = require('NativeModules').KeyboardObserver;
var dismissKeyboard = require('dismissKeyboard');
var KeyboardEventEmitter = new NativeEventEmitter(KeyboardObserver);

var Keyboard = {
  addListener: function addListener(eventName, callback) {
    invariant(false, 'Dummy method used for documentation');
  },
  removeListener: function removeListener(eventName, callback) {
    invariant(false, 'Dummy method used for documentation');
  },
  removeAllListeners: function removeAllListeners(eventName) {
    invariant(false, 'Dummy method used for documentation');
  },
  dismiss: function dismiss() {
    invariant(false, 'Dummy method used for documentation');
  }
};

Keyboard = KeyboardEventEmitter;
Keyboard.dismiss = dismissKeyboard;

module.exports = Keyboard;