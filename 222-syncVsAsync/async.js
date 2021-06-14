const fs = require('fs');
fs.readFile('.idea/misc.xml', 'utf8', ((err, data) => {
    if (err)
        throw err
    console.log(data);
}));
console.log('file has loaded successfully');