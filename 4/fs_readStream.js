

const fs = require('fs');

const rs = fs.createReadStream('./4/fs_readStream.js');

rs.pipe(process.stdout);