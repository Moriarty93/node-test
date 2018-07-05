module.exports.text = 'b';

const modA = require('./05a');

console.log('modB: ' + modA.text);

module.exports.text = 'bbb';