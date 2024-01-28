

// function printHello(){
//     console.log("Akram")
// }

// console.log("Arman")
// setTimeout(printHello,1000);
// console.log("Nadeem")


// /*************************************************/


// function printHello(){
//     console.log("Akram")
// }

// function printHello2(){
//     console.log("Tosif")
// }

// console.log("Arman")
// setTimeout(printHello,0);
// console.log("Nadeem")
// setTimeout(printHello2,1000);




/******************************************** */
/******************************************** */
/******************************************** */

// fetch('https://jsonplaceholder.org/users/3')
// .then((response)=> { 
//         if(response.ok){
//             console.log(response)
//             return response.json();
//         }
//         else{
//             // console.log("Page is Not Found") 
//             throw new Error(`${response.status} ${response.statusText} Nadeem`);           
//         }
   
//  })
//     .then((data)=> { console.log(data)})



// function display(data) { console.log(data) }
// function printHello() { console.log("Hello"); }

// function blockFor300ms() {/*block js thread for 300ms*/ }


// setTimeout(printHello, 0);

// const furtureData = fetch('https://jsonplaceholder.org/users/3')
// console.log(furtureData);

// furtureData.then((response)=> {
//     return response.json();
// })
// .then(display)


// blockFor300ms()


// console.log("Me First");



/***************************************************/
// console.log("Hello")

// setTimeout(function(){
//     console.log("World!");
// },0)

// const promiseOne = new Promise(function (resolve, reject) {
//     //Do an async task
//     setTimeout(function () {
//         console.log('Async task is complete');
//         resolve()
//     }, 1000)
// })

// promiseOne.then(function () {
//     console.log("promise consumed");
// })

// setTimeout(function(){
//     console.log("The End");
// },0)


/******************************************************/

const promiseOne = new Promise(function (resolve, reject){
    if(Math.round(Math.random())){
        resolve("I'm a resolved promise");
    }else{
        reject("I'm a rejected promise");
    }
}).then(function(){
    console.log("Promis succes");
})