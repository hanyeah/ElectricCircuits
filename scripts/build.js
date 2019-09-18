var copyFile = require('./copyfile.js');

console.log(__dirname)
var dir = './../dist';
copyFile('./../lib/ElecMain.js', dir+'/ElecMain.js');
copyFile('./../node_modules/Electricity/lib/Electricity.js', dir+'/Electricity.js');
copyFile('./../node_modules/MatrixMath/lib/MatrixMath.js', dir+'/MatrixMath.js');
copyFile('./../node_modules/PixiTs/PIXI.js', dir+'/PIXI.js');
