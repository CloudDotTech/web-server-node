const fs = require('fs');

let readStream = fs.createReadStream(__dirname + '/data/readStream.txt');
let writeStream = fs.createWriteStream(__dirname + '/data/writeStream.txt')

readStream.on('data', function (chunk) {
    writeStream.write(chunk);
    console.log('---------------------------->');
})
