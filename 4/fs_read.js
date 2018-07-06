

const fs = require('fs');

fs.readFile('./4/fs1.js', 'utf8', (err, data) => {
  if(err) {
    console.log(err);
  }
  console.log(data);
});


const data = fs.readFileSync('./3/01.js', 'utf8');
console.log(data);