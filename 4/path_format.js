

const { parse, format } = require('path');

const filePath = '/user/local/modules/uuu.js';

const a = parse(filePath);

console.log(a);

console.log(format(a));