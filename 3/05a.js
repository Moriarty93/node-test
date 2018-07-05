module.exports.text = 'a';

const modB = require('./05b');

console.log('modA: ' + modB.text);

module.exports.text = 'aaa';