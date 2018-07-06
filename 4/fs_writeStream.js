

const fs = require('fs');

const ws = fs.createWriteStream('./4/test.txt');

const timer = setInterval(() => {
  const num = parseInt(Math.random() * 10);
  if(num < 8) {
    ws.write(num.toString());
  } else {
    clearInterval(timer);
    ws.end();
  }
}, 500);

ws.on('finish', () => {
  console.log('done');
});