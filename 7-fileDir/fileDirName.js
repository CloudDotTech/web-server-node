// console.log(" ***** ***** ***** ***** ***** ***** ***** ***** ***** ***** ***** ***** ***** ***** ***** ");
// console.log(__filename);
// console.log(" ***** ***** ***** ***** ***** ***** ***** ***** ***** ***** ***** ***** ***** ***** ***** ");
// console.log(__dirname);
// console.log(" ***** ***** ***** ***** ***** ***** ***** ***** ***** ***** ***** ***** ***** ***** ***** ");

const fs = require('fs');
let data;
data = fs.readFileSync('../.idea/misc.xml', 'utf8', (err) => {
    if (err) {
        throw err;
    }
});
console.log('file loaded successfully');
console.log(" ***** ***** ***** ***** ***** ***** ***** ***** ***** ***** ***** ***** ***** ***** ***** ");

fs.mkdirSync(`${__dirname}/misc`, (err) => {
    if (err) {
        throw err;
    }
});
console.log('directory created successfully');
console.log(" ***** ***** ***** ***** ***** ***** ***** ***** ***** ***** ***** ***** ***** ***** ***** ");

fs.writeFileSync(`${__dirname}/misc/misc.xml`, data, (err) => {
    if (err) {
        throw err;
    }
});
console.log('file saved successfully');
console.log(" ***** ***** ***** ***** ***** ***** ***** ***** ***** ***** ***** ***** ***** ***** ***** ");


fs.unlinkSync(`${__dirname}/misc/misc.xml`, (err) => {
    if (err) {
        throw err;
    }
});
console.log('file deleted successfully');
console.log(" ***** ***** ***** ***** ***** ***** ***** ***** ***** ***** ***** ***** ***** ***** ***** ");
fs.rmdirSync(`${__dirname}/misc`);
console.log('directory deleted successfully');
console.log(" ***** ***** ***** ***** ***** ***** ***** ***** ***** ***** ***** ***** ***** ***** ***** ");


// data = fs.readFile('../.idea/misc.xml', 'utf8', (err, data) => {
//     if (err) {
//         throw err;
//     }
// });
// console.log(data);
// console.log('file has loaded successfully');
// console.log(" ***** ***** ***** ***** ***** ***** ***** ***** ***** ***** ***** ***** ***** ***** ***** ");
// data='test';


// fs.writeFile('7-fileDir/misc.xml', data, function (err) {
//     if (err) {
//         throw err;
//     }
// });
// console.log('file saved successfully');
// console.log(" ***** ***** ***** ***** ***** ***** ***** ***** ***** ***** ***** ***** ***** ***** ***** ");
// fs.unlink('7-fileDir/misc.xml', (err) => {
//     if (err) {
//         throw err;
//     }
// });
