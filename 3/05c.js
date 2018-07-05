const a = require('./05a');

const b = require('./05b');

console.log(a.text);
console.log(b.text);

//一旦出现某个模块被循环加载，就只输出已经执行的部分，还未执行的部分不输出