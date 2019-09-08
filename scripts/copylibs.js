var copyFile = require('./copyfile.js');

console.log(__dirname)
var dir = './../src/lib';
copyFile('./../node_modules/Electricity/lib/Electricity.d.ts', dir+'/Electricity.d.ts');
copyFile('./../node_modules/MatrixMath/lib/MatrixMath.d.ts', dir+'/MatrixMath.d.ts');
copyFile('./../node_modules/PixiTs/PIXI.d.ts', dir+'/PIXI.d.ts');
