/**
 * Created by hanyeah on 2019/11/12.
 */
var fs = require('fs');
var path = require('path');

/**
 * 遍历src目录，拷贝所有满足条件的文件（路径满足正则匹配）到目标位置。
 * @param src 源目录
 * @param dist 目标目录
 * @param reg 正则表达式
 * @param maxLevel 遍历最大深度，默认3
 */
function copyAllFiles(src, dist, reg, maxLevel = 3){
  walk(path.join(__dirname, src), function(filePath, fileName, level){
    if(level < maxLevel && filePath.match(reg)){
      const tarPath = path.join(__dirname, dist, fileName);
      copyFile0(filePath, tarPath);
    }
  }, 0);
}

function fileChangeFilter(filePath, tarPath){
  if (!fs.existsSync(tarPath)) {
    return true;
  }
  var stat1 = fs.statSync(filePath);
  var stat2 = fs.statSync(tarPath);
  if (stat1 && stat2) {
    return stat2.size !== stat1.size || stat2.mtimeMs < stat1.mtimeMs;
  }
  return true;
}

/**
 * 遍历src目录，拷贝icon。拷贝css文件以及和css文件同名的png文件。
 * @param src 源目录
 * @param dist 目标目录
 */
function copyIcons(src, dist){
  walk(path.join(__dirname, src), function(filePath, fileName, level){
    if(fileName.match(/\.css$/)){
      copyFile0(filePath, path.join(__dirname, dist, fileName));
      copyFile0(filePath.replace(".css", ".png"), path.join(__dirname, dist, fileName.replace(".css", ".png")));
    }
  }, 0);
}

/**
 * 拷贝单个文件
 * @param src
 * @param dist
 */
function copyFile(src, dist) {
  copyFile0(path.join(__dirname,src), path.join(__dirname, dist));
}

/**
 * 拷贝文件
 * @param from
 * @param to
 */
function copyFile0(from , to, force = false){
  if(force || fileChangeFilter(from, to)) {
    console.log("copyfile:", from, to);
    mkdir(to);
    fs.writeFileSync(
      to,
      fs.readFileSync(from)
    );
  }
}

/**
 * 检查目录，不存在递归创建。
 * @param filePath
 */
function mkdir(filePath){
  var pathinfo = path.parse(filePath);
  if (!fs.existsSync(pathinfo.dir)) {
    fs.mkdirSync(pathinfo.dir, {recursive: true});
  }
}

/**
 * 遍历文件夹
 * @param dir
 * @param callBack
 * @param level
 */
function walk(dir, callBack, level) {
  const list = fs.readdirSync(dir);
  for(var i = 0; i < list.length; i++) {
    const fileName = list[i];
    const filePath = dir + '/' + fileName;
    const stat = fs.statSync(filePath);
    if(stat && stat.isDirectory()) {
      walk(filePath, callBack, level+1);
    } else {
      callBack(filePath, fileName, level);
    }
  }
}

module.exports = {
  walk: walk,
  copyFile: copyFile,
  copyFile0: copyFile0,
  mkdir: mkdir,
  copyAllFiles: copyAllFiles,
  copyIcons: copyIcons
};