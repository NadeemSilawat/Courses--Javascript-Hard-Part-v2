//javaScript principle
//:)Thread of Execution , Call Stack.

const num = 3;
function multiplyBy2(inputNumber) {
    const result = inputNumber * 2;
    return result;
}

const output = multiplyBy2(num);
const newOutput = multiplyBy2(10);

console.log(newOutput)
console.log(output)

/*****************************************************/
/*****************************************************/

//Function & Callbacks

// correct
function square(num) {
    return num * num
}
console.log(square(10));    //100
console.log(square(9));     //81
console.log(square(8));     //64




//MultiplyBy2

// function copyArrayAndMultiplyBy2(array) {
//     const output = [];
//     for (let i = 0; i < array.length; i++) {
//     output.push(array[i] *2);
//     }
//     return output;
//     }
//    const myArray = [1,2,3];
//    const result = copyArrayAndMultiplyBy2(myArray);

//    console.log(result)




//DivideBy2

// function copyArrayAndDivideBy2(array) {
//     const output = [];
//     for (let i = 0; i < array.length; i++) {
//     output.push(array[i] / 2);
//     }
//     return output;
//     }
//    const myArray = [1,2,3];
//    const result = copyArrayAndDivideBy2(myArray);

//    console.log(result)



// Or add 3?

// function copyArrayAndAdd3(array) {
//     const output = [];
//     for (let i = 0; i < array.length; i++) {
//         output.push(array[i] + 3);
//     }
//     return output;
// }
// const myArray = [1, 2, 3];
// const result = copyArrayAndAdd3(myArray);

// console.log(result);



// DRY - Don’t Repeat Yourself
// Write a JavaScript function that takes in an array of numbers and returns the sum of all elements in
// the array. 

// function copyArrayAndManipulate(array,instruction){
//     const output= [];
//     for (let i = 0; i<array.length; i++){
//         output.push(instruction(array[i]))

//     }
//     return output;

// }

// function multiplyBy2(input) {return input*2;}

// function multiplyBy2(input) {return input/2}
// function multiplyBy2(input) {return input+3}

// const result = copyArrayAndManipulate([1,2,3,4] ,multiplyBy2)

// console.log(result);

