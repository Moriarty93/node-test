

const fs = require('fs');

fs.unlink('./4/fs_test.txt', err => {
  if(err) {
    throw err;
  }
  console.log('done');
});