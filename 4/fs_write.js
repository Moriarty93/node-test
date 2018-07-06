const fs = require('fs');

const content = Buffer.from('测试测试');

fs.writeFile('./4/fs_test.txt', content, err => {
  if(err) {
    throw err;
  }
  console.log('done');
});