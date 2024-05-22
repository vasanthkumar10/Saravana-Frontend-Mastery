// primitive variables -> stack memory
// let num = 10;
// console.log(num, typeof num); // number
// num = 10.456;
// console.log(num, typeof num); // number
// num = "A";
// console.log(num, typeof num); // string
// num = "Saravana";
// console.log(num, typeof num); // string
// num = true; // false
// console.log(num, typeof num); // boolean
// num = undefined;
// console.log(num, typeof num); // undefined
// num = null;
// console.log(num, typeof num); // object

// example
// let num = 10;
// let copy = num;
// console.log(num, copy);
// copy = 20;
// console.log(num, copy);

// referrence(address copied in stack memory) variables -> arrays, functions, objects
// const nums = [1, [2, 3, 4], 5];
// const copy = [...nums]; // spread -> shallow copy -> 1 level
// console.log(nums, copy);
// copy[0] = 100;
// nums[1][0] = 200;
// console.log(nums, copy);

// const obj = {
//   name: "vasi",
//   age: 20,
// };
// const copy = obj;
// console.log(obj, copy);
// copy["name"] = "saravana";
// console.log(obj, copy);

// function copy(arr) {
//   let copied = [];
//   for (let data of arr) {
//     if (Array.isArray(data)) {
//       copied = [...copied, copy(data)];
//     } else {
//       copied = [...copied, data];
//     }
//   }
//   return copied;
// }

// const nums = [1, [2, 4], 3];
// const copyNums = copy(nums);
// console.log(nums, copyNums);
// nums[1][0] = 20;
// console.log(nums, copyNums);

// const lodash = require("lodash");

// const obj = {
//   name: "vasi",
//   family: {
//     child: 1,
//   },
// };
// // const copy = { ...obj }; // shallow copy
// const copy = lodash.cloneDeep(obj); // deep copy
// console.log(obj, copy);
// obj["name"] = "saravana";
// console.log(obj, copy);
// obj["family"]["child"] = 20;
// console.log(obj, copy);

// scope
// var num = 10;
// {
//   let num = 20;
//   console.log(num);
// }

// console.log(num);

// function demo() {
//   var num = 20; // function scope
//   console.log("inside", num);
// }

// demo();
// console.log("outside", num); // Reference error

// console.log(module);
// console.log("=".repeat(50));
// console.log(require);
// console.log("=".repeat(50));
// console.log(exports);
// console.log("=".repeat(50));
// console.log(__filename);
// console.log("=".repeat(50));
// console.log(__dirname);
// console.log("=".repeat(50));

// modular programming
// Every JS file is nothing but IIFE function
// Immediately Invoked function expression

// (function () {
//   console.log("demo");
// })();

// (function (module, exports, require, __filename, __dirname) {
//   /**
//    *
//    * JS Code
//    */
// })(module, exports, require, __filename, __dirname);
