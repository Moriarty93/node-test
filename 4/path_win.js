
const { sep, delimiter, win32, posix } = require('path');

console.log('sep: ', sep);

console.log('win sep: ', win32.sep);

console.log('posix sep: ', posix.sep);



console.log('PATH', process.env.PATH);

console.log('delimiter: ', delimiter);

console.log('win d: ', win32.delimiter);

console.log('posix d: ', posix.delimiter);




