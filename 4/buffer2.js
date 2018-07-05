

console.log(Buffer.byteLength('test'));

console.log(Buffer.byteLength('测试'));

console.log(Buffer.isBuffer({}));

console.log(Buffer.isBuffer(Buffer.from([1, 3, 4])));


const b1 = Buffer.from('This');
const b2 = Buffer.from('is');
const b3 = Buffer.from('a');
const b4 = Buffer.from('test');
const b5 = Buffer.from('!');

const buf = Buffer.concat([b1, b2, b3, b4, b5]);

console.log(b1);

console.log(b3);

console.log(buf);



