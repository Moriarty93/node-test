

const buf = Buffer.from('This is a test !');

console.log(buf.length);

let buf1 = Buffer.alloc(10);
buf1[0] = 2;

console.log(buf1.length);

console.log(buf.toString());
console.log(buf.toString('base64'));


const buf2 = Buffer.allocUnsafe(10);
console.log(buf2);
console.log(buf2.fill(11, 1, 7));


const buf3 = Buffer.from('test');
const buf4 = Buffer.from('test');
const buf5 = Buffer.from('test1');

console.log(buf3.equals(buf4));
console.log(buf3.equals(buf5));

console.log(buf3.indexOf('es'));
console.log(buf3.indexOf('es1'));


const { StringDecoder } = require('string_decoder');
const decoder = new StringDecoder('utf8');
//中文3个字节表示一个中文

const buf6 = Buffer.from('中文字符乱码！');

for (let i = 0; i < buf6.length; i += 5) {
  const b = Buffer.allocUnsafe(5);
  buf6.copy(b, 0, i);
  console.log(b.toString());
}

for (let i = 0; i < buf6.length; i += 5) {
  const b = Buffer.allocUnsafe(5);
  buf6.copy(b, 0, i);
  console.log(decoder.write(b));
}








