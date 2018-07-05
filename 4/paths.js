

const path = require('path');

const mod = require('../3/02');

console.log(mod.num);

console.log('__dirname ', __dirname);

console.log('process.cwd() ', process.cwd());

console.log('./ ', path.resolve('./'));


//__dirname  __filename返回文件的路径
// process.cwd()  返回执行Node命令所在文件夹



