

const fs = require('fs');
fs.rename('./666.txt', './4/fs_test.txt', err => {
  if(err) {
    throw err;
  }
  console.log('done');
});