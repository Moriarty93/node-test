

const EventEmitter = require('events');

class CusEvent extends EventEmitter {};

const ce = new CusEvent();

ce.on('test', (a, b) => {
  console.log(a + b);
});

ce.emit('test', 2, 3);



const fn1 = () => console.log('fn1');
const fn2 = () => console.log('fn2');

ce.on('uuu', fn1);
ce.on('uuu', fn2);

setInterval(() => {
  ce.emit('uuu');
}, 500);

setTimeout(() => {
  ce.removeListener('uuu', fn2);
}, 1500);

setTimeout(() => {
  ce.removeAllListeners('uuu');
}, 2500);

