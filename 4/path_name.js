

const { basename, dirname, extname } = require('path');

const filePath = '/user/local/home/iii.css';

//文件名
console.log(basename(filePath));
//所在路径
console.log(dirname(filePath));
//拓展名
console.log(extname(filePath));


