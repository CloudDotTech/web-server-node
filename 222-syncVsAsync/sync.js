const fs = require('fs');
let data = fs.readFileSync('../.idea/misc.xml', 'utf8');
console.log(data);
console.log('file has loaded successfully');