
// const normalize = require('path').normalize;

const { normalize } = require('path');

console.log(normalize('/user//local/bin'));
console.log(normalize('/user/../local/bin'));