

const fs = require('fs');

fs.readdir('./4', (err, files) => {
  if(err) {
    throw err;
  }
  console.log(files);
});