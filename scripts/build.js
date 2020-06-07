var fileUtil = require('./fileUtil.js');

var dir = './../test/js/';

fileUtil.copyAllFiles('./../node_modules', dir, /dist\/.*\.js$/);
fileUtil.copyAllFiles('./../dist', dir, /\.js$/);