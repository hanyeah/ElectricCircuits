var fileUtil = require('./fileUtil.js');

var dir = './../src/libs/';

fileUtil.copyAllFiles('./../node_modules', dir, /dist\/.*\.d.ts$/);
