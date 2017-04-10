
'use strict';

var Platform = require('Platform');

var normalizeColor = require('normalizeColor');

function processColor(color) {
  if (color === undefined || color === null) {
    return color;
  }

  var int32Color = normalizeColor(color);
  if (int32Color === null) {
    return undefined;
  }

  int32Color = (int32Color << 24 | int32Color >>> 8) >>> 0;

  if (Platform.OS === 'android') {
    int32Color = int32Color | 0x0;
  }
  return int32Color;
}

module.exports = processColor;