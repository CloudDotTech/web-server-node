const fs = require('fs');

let readStream = fs.createReadStream(__dirname + '/data/readStream.txt');
readStream.on('data', function (chunk) {
    console.log('==========New Chunk===========>' + chunk);
})





