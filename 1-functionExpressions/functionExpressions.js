function logIt(message) {
    console.log(message);
}

logIt("Hello Mohamed");
console.log(" ***** ***** ***** ***** ***** ***** ***** ***** ***** ***** ***** ***** ***** ***** ***** ");

let fun = function (message) {
    console.log(message);
}
fun("Hello Mohamed");
console.log(" ***** ***** ***** ***** ***** ***** ***** ***** ***** ***** ***** ***** ***** ***** ***** ");

function runThis(fun) {
    fun();
}
let logIt3 = (m) => {
    console.log("Hello Mohamed "+m);
};
runThis(logIt3);