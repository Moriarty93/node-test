

const EventEmitter = require('events');

class CusEvent extends EventEmitter {};


const ce = new CusEvent();

ce.on('test', () => {
  console.log('This is a test!');
});

setTimeout(() => {
  ce.emit('test');
}, 2000);
