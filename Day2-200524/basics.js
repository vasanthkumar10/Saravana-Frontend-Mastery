// setTimeout(() => {
//   console.log("a");
// }, 0);

// Promise.resolve().then(() => {
//   console.log("c");
// });

// console.log("b");

// // browser -> api

// console.table({
//   name: "vasi",
//   age: 10,
// });

// JAVASCRIPT LIFE CYCLE

// var num = 10; // stores in global window memory
// console.log(num);

// let or const -> stores in script memory

// JavaScript Lifecycle -> (Memory Creation Phase + Code Execution Phase) -> Call Stack => Execution Context
// HOISTING -> always function declarations are hoisted ->
// process of creating the memories for variables, functions... before execution

// console.log(num);
// var num = 10
// let num = 10; // const num = 10
// demo();

// function declaration
// function demo() {
//   console.log("demo fn");
// }

// first class object or functions
// function expression
// var demo = () => {
//   console.log("demo fn");
// };

// let demo = () => {
//   console.log("demo fn");
// };

// let arr = [1, 2, 3];
// let arr = new Array(1, 2, 3); // both are same
// console.log(arr, typeof arr);

// class Parent {
//   name = "parent";

//   display() {
//     console.log("parent display");
//   }
// }

// class Child extends Parent {
//   age = 10;

//   display() {
//     console.log("child display");
//   }
// }

// const child = new Child();
// console.log(child.name);
// child.display();

// let nums = [1, 2, 3];
// console.log(Array.isArray(nums));

// for loops -> 3 loops
// general for loop -> let i=0; i<length; i++ -> await will not work here
// for of loop -> async -> await works here
// for in loop -> object traversal

// let nums = [1, 2, 3, 4];

// for (let i = 0; i < nums.length; i++) {
//   console.log(nums[i]);
// }

// for (let num of nums) {
//   console.log(num);
// }

// let obj = {
//   name: "vasi",
//   age: 10,
// };

// for (let key in obj) {
//   console.log(key, obj[key]);
// }

// let nums = [1, 2, 3, 4];
// nums[100] = 100;
// nums["name"] = "vasanth";

// array length is always (max key + 1)
// console.log(nums, nums.length); // maxkey + 1

// for (let i = 0; i < nums.length; i++) {
//   console.log(nums[i]);
// }

// for (let num of nums) {
//   console.log(num);
// }

// for (let key in nums) {
//   console.log(key, nums[key]);
// }

// Prototypical Inheritance
// PROTO -> parent
// const obj = {
//   name: "saravana",
//   age: 24,
//   place: "salem",
// };

// let nums = [1, 2, 3, 4];

// nums.__proto__ = obj;

// // nums.push(5);
// console.log(nums.name, nums.age, nums.place);

// 3 ways to create object
// 1. Object Literal -> {} or Object.create()
// 2. Factory method => raw data -> object
// 3. Constructor method -> this

// const vasi = {
//   name: "vasi",
//   age: 10,
//   display: function () {
//     console.log(`My name is ${this.name} and my age is ${this.age}`);
//   },
// };

// const saravana = {
//   name: "saravana",
//   age: 5,
//   display: function () {
//     console.log(`My name is ${this.name} and my age is ${this.age}`);
//   },
// };

// console.log(vasi);
// console.log(saravana);

// factory method
// function createPerson(name, age) {
//   return {
//     name,
//     age,
//     display: function () {
//       console.log(`My name is ${this.name} and my age is ${this.age}`);
//     },
//   };
// }

// const saravana = createPerson("saravana", 5);
// const vasi = createPerson("vasi", 10);

// console.log(vasi);
// console.log(saravana);

// constructor method

// function Person(name, age) {
//   //   console.log(this);
//   this.name = name;
//   this.age = age;
//   this.display = function () {
//     console.log(`My name is ${this.name} and my age is ${this.age}`);
//   };

//   //   return this; // optional
// }

// class Person {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }

//   //   all the children can access this display method
//   display() {
//     console.log(`My name is ${this.name} and my age is ${this.age}`);
//   }
// }

// const vasi = new Person("vasi", 10);

// vasi.display = function () {
//   console.log("vasi display fn");
// };
// const saravana = new Person("Saravana", 5);
// // console.log(vasi);
// // console.log(saravana);

// vasi.display();
// saravana.display();

// weird js
// console.log(10 + 5);
// console.log("10" + 5); // str + int => str
// console.log(5 + 5 + "10"); // 1010

// console.log(10 - 5); // 5
// console.log("10" - 5); // 5
// console.log("a" - 5); // NaN -> Not a number
// console.log("b" - 5); // NaN -> Not a number

// console.log(typeof NaN); // number
// console.log(NaN == NaN); // false

// console.log([] == []); // false -> each arr has new referrence
// console.log([1, 2, 3] + [4, 5, 6]); // '1, 2, 34, 5, 6' => string
// console.log([] + []); // '' => string

// console.log("10" == 10, "10" === 10);

// console.log(typeof undefined);
// console.log(undefined == undefined, undefined === undefined); // true, true
// console.log(null, typeof null); // object
// console.log(null == null, null === null); // true, true

// console.log(null == undefined, null === undefined); // true, false
