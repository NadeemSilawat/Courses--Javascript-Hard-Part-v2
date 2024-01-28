// ES6+ Promises

function display(data) {
    console.log(data)
}

const futureData = fetch('https://www.google.com')
futureData.then(display);
// console.log(futureData);
console.log("Me first");


/************************************************/

// But we need to know how our promise-deferred functionality gets back into JavaScript to be run
function display(data) { console.log(data) }
function printHello() { console.log("Hello"); }

function blockFor300ms() {/*block js thread for 300ms*/ }


setTimeout(printHello, 0);

const furtureData = fetch('https://jsonplaceholder.org/users/3')
furtureData.then((response)=> {
    return response.json();
})
.then(display)


blockFor300ms()


console.log("Me First");



/********************************************** */

// This code are Additionaly Practise the promise section...............

const promiseOne = new Promise(function (resolve, reject) {
    //Do an async task
    setTimeout(function () {
        console.log('Async task is complete');
        resolve()
    }, 1000)
})




promiseOne.then(function () {
    console.log("promise consumed");
})




//Without Variable Assaign

new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Hello Promise");
        resolve()

    },1000)
}).then(function(){
    console.log("Done Hello")
})

//PromiseThree get the resolve Data

const PromiseThree = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username:"Nadeem", password:"nsilawat"})
    },1000)
})

PromiseThree.then(function(user){
    console.log(user);
})



//PromiseFoure


const promiseFoure = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = false;
        if(!error){
             resolve({username:"silawat", password: "1203"})               
        }else{
            reject('Error : Somthing Went Wrong')
        }
    },1000)
}).then((hase) => {
    console.log(hase)
    return hase.password;
}).then((myuser)=>{
    console.log(myuser)
}).catch(function(errors){
    console.log(errors)
}).finally(() => console.log('Finally resolve or rejection Completed..'))


//////////////////////////

const promiseFive = new Promise(function(resolve,reject){
    setTimeout(function(){
        let errord = false
        if (!errord){
            resolve({username:"JavaScript", password: "4357"})               
        }else{
            reject('Error : JS Went Wrong')
    
        }
    },1000)
  
})

async function consumPromisFive(){
    const response = await promiseFive
    console.log(response);
    console.log(response.username);
}

consumPromisFive();


/************************* */



