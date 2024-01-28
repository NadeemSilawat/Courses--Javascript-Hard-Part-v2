
// single-threaded-execution


const num = 3
function MultiplyBy2(inputNumber) {
    const result = inputNumber * 2;
    return result
}

const output = MultiplyBy2(num);
const newOutput = MultiplyBy2(10);


// asynchronicity-in-javascript

// What if we try to delay a function directly using setTimeout?

    // function printHello(){
    //     console.log("Hello")
    // }

    // setTimeout(printHello,1000);

    // console.log("Me first")

// So what about a delay of 0ms

    // function printHello(){
    //     console.log(" Hello");
    // }
    // setTimeout(printHello,0);
    // console.log("Me first");

// We’re interacting with a world outside of JavaScript now - so we need rules]]

function printHello(){console.log("Hello")}
function blockforsec(){
// blocks in the JavaScript thread for 1 sec
}
setTimeout(printHello,0);

blockforsec();

console.log("Me first");



