


/***************************************/

    // Closure.

// Functions get a new memory every run/invocation

// function MultiplyBy2(inpuNumber){
//   const result = inpuNumber*2
//   return result
// }

// const output = MultiplyBy2(4)
// const Newoutput = MultiplyBy2(10)

// console.log(output)
// console.log(Newoutput);



// Functions can be returned from other functions in JavaScript.

// function createFunction() {
//  function multiplyBy2 (num){
//  return num*2;
//  }
//  return multiplyBy2;
// }
// const generatedFunc = createFunction();
// const result = generatedFunc(3); // 6

// console.log(result);


// Calling a function outside of the function call in which it was defined

// function outer(){
//   let counter = 0;
//   function innerCounter(){
//     counter ++;
//   }
//   innerCounter();
  
// }
// outer();

// console.log(outer());


// function outerHeight(){
//     let counter = 0;
//     function addToCounter(){counter ++;} 
//     return addToCounter;
// }

// const func = outerHeight();
// console.log(func());



// Let’s run outer again 

// function outer (){
//  let counter = 0;
//  function incrementCounter (){
//  counter ++;
//  }
//  return incrementCounter;
// }

// const myNewFunction = outer();
// myNewFunction();
// myNewFunction();
// const anotherFunction = outer();
// anotherFunction();
// anotherFunction();



