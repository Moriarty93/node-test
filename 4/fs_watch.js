

const fs = require('fs');

fs.watch('./4', {
  recursive: true
}, (eventType, filename) => {
  console.log(eventType, filename);
}); 