// Classes & Prototypes oop (Object Oriented Programing).....

// Objects - store functions with their associated data!

const user1 = {
    name: "Will",
    score: 3,
    increment: function () { user1.score++; }
};

user1.increment();


// Creating user2 user dot notation

// Declare an empty object and add properties with dot notation



const user2 = {}; //create an empty object


//assign properties to that object
user2.name = "Tim";
user2.score = 6;
user2.increment = function () {
    user2.score++;
};

/*******************************************/

//Factory Function .............


// Creating user3 using Object.create  //

const user3 = Object.create(null);

user3.name = "Eve";
user3.score = 9;
user3.increment = function () {
    user3.score++;

}
console.log(user3);
console.log(user3.increment());
console.log(user3);


/*************************************************/

// Solution 1. Generate objects using a function


function userCreator(names, score) {
    const newUser = {};
    newUser.names = names;
    newUser.score = score;
    newUser.increment = () => newUser.score++;

    return newUser;
}

const person1 = userCreator("will", 6);
const person2 = userCreator("Tim", 2);

console.log(person1)


        ///////////////////Prototype chain //////////////////////////////////

// Solution 2: Using the prototype chain
// function userCreator(name, score) {
//     const newUser = Object.create(userFunctionStore);
//     newUser.name = name;
//     newUser.score = score;
//     return newUser;
// };
// const userFunctionStore = {
//     increment: function () { this.score++; },
//     login: function () { console.log("Logged in"); }
// };
// const users1 = userCreator("Will", 3);
// const user2 = userCreator("Tim", 5);
// users1.increment();





// what if we want to confirm our user1 has the property score

// function userCreator (name, score) {
//     const newUser = Object.create(userFunctionStore);
//     newUser.name = name;
//     newUser.score = score;
//     return newUser;
// };

// const userFunctionStore = {
//     increment: function() {this.score++;},
//     login: function() {console.log("Logged in");}
// };

// const user1 = userCreator("Will", 3);
// const user2 = userCreator("Tim", 5);
// user1.hasOwnProperty('score')

// we can use the has ownproperty method - but where is it?





            //----- (05) - (this keyword)

// create and invoke a new function (add1) inside increment

// function userCreator (name, score) {
//     const newUser = Object.create(userFunctionStore);
//     newUser.name = name;
//     newUser.score = score;
//     return newUser;
// };            

// const userFunctionStore = {
//     increment: function() {
//         function add1() { this.score++; }
//         add1()
//     }
// };

// const user1 = userCreator("Will", 3);
// const user2 = userCreator("Tim", 5);
// user1.increment();

// what does this get auto-assigned to?


            // (Arrow Function Scope & this)//////////////////////


// Arrow functions override the normal this rules

// function userCreator (name, score) {
//     const newUser = Object.create(userFunctionStore);
//     newUser.name = name;
//     newUser.score = score;
//     return newUser;
// };            

// const userFunctionStore = {
//     increment: function() {
//         const add1 = () => { this.score++; }
//         add1()
//     }
// };

// const user1 = userCreator("Will", 3);
// const user2 = userCreator("Tim", 5);
// user1.increment();

// now our inner function gets its this set by where it was saved - its a 'lexically scoped this




        //----- (07) - (new keyword)

// The new keyword automates a lot of our manual work

// function userCreator(name, score) {
// const newUser = Object.create(functionStore) // line cancel
// /* newUser */ this.name = name;
// /* newUser */ this.score = score;
/* return newUser; */
// };

// /*functionStore*/ userCreator.prototype // {};
// /*functionStore*/ userCreator.prototype.increment = function() {
// this.score++;
// }

// const user1 = new userCreator("Will", 3);


            // (02)

// interlude - functions are both objects and functions

// function multiplyBy2(num) {
//     return num*2
// }

// multiplyBy2.stored = 5
// multiplyBy2(3)  // 6

// multiplyBy2.stored  // 5
// multiplyBy2.prototype   // {}



            // new keyword example


// function userCreator(name, score) {
//     this.name = name;
//     this.score = score;
// }

// userCreator.prototype.increment = function () { this.score++; };
// userCreator.prototype.login = function () { console.log("login"); };

// const user1 = new userCreator("Eva", 9)

// user1.increment()


// //----- (09) - (class keyword)

// // solution 4: the class 'syntatic sugar'

// class userCreator {
//     constructor(name, score) {
//         this.name = name;
//         this.score = score;
//     }
//     increment() { this.score++; }
//     login() { console.log("login"); }
// }

// const user1 = new userCreator("Eva", 9);
