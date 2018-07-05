const fs = require('fs');


fs.readFile('./06.js', (err, data) => {
  if(err) {
    console.log(err);
  } else {
    console.log(data);
    console.log(data.toString());
  }
});