console.log(" ***** ***** ***** ***** ***** ***** ***** ***** ***** ***** ***** ***** ***** ***** ***** ");

setTimeout(function () {
    console.log("1 Time out!");
}, 3000);
console.log(" ***** ***** ***** ***** ***** ***** ***** ***** ***** ***** ***** ***** ***** ***** ***** ");

setTimeout(() => {
    console.log("2 Time out! for 3");
}, 3000);
console.log(" ***** ***** ***** ***** ***** ***** ***** ***** ***** ***** ***** ***** ***** ***** ***** ");

let time = 0;
let interval = setInterval(() => {
    console.log("3 Time out! for " + (time += 1));
    if (time > 5) {
        clearInterval(interval);
    }
}, 1000);
console.log(" ***** ***** ***** ***** ***** ***** ***** ***** ***** ***** ***** ***** ***** ***** ***** ");


