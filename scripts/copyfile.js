var path = require('path');
var fs = require('fs');

function copyFile(src, dist) {
    fs.writeFileSync(path.join(__dirname, dist), fs.readFileSync(path.join(__dirname,src)));
}

module.exports = copyFile;
