console.log(" ***** ***** ***** ***** ***** ***** ***** ***** ***** ***** ***** ***** ***** ***** ***** ");
let counter = function (arr) {
    return 'There is ' + arr.length + ' elements in this array.';
}
let adder = (num1, num2) => {
    return `The sum is ${num1 + num2}`;
}
module.exports = {
    co: counter,
    ad: adder
};


console.log(" ***** ***** ***** ***** ***** ***** ***** ***** ***** ***** ***** ***** ***** ***** ***** ");
// let counter1 = function (arr) {
//     return 'There is ' + arr.length + ' elements in this array.';
// }
// let adder1 = (num1, num2) => {
//     return `The sum is ${num1 + num2}`;
// }
module.exports.cot = counter;
module.exports.add = adder;


// console.log(" ***** ***** ***** ***** ***** ***** ***** ***** ***** ***** ***** ***** ***** ***** ***** ");
module.exports.count = function (arr) {
    return 'There is ' + arr.length + ' elements in this array.';
}
module.exports.add = (num1, num2) => {
    return `The sum is ${num1 + num2}`;
}
