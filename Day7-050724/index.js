// function borrowing methods
// call, apply, bind

// const saravana = {
//   name: "saravana",
//   place: "salem",
//   display: function () {
//     console.log(`My name is ${this.name} and I'm from ${this.place}`);
//   },
// };

// const vasanth = {
//   name: "vasanth",
//   place: "chennai",
//   display: function () {
//     console.log(`My name is ${this.name} and I'm from ${this.place}`);
//   },
// };

// // display method has duplicate memory

// // saravana.display();
// // vasanth.display();

// console.log(saravana);
// console.log(vasanth);

// Solution

// const saravana = {
//   name: "saravana",
//   place: "salem",
// };

// const vasanth = {
//   name: "vasanth",
//   place: "chennai",
// };

// function display(country, pincode) {
//   //   console.log(this); // calling object
//   console.log(
//     `My name is ${this.name} and I'm from ${this.place}, ${country}, ${pincode}`
//   );
// }

// call
// display.call(saravana, "usa", 57326);
// display.call(vasanth, "India", 600001);

// apply -> arguments will be in array format
// display.apply(saravana, ["usa", 57326]);
// display.apply(vasanth, ["uae", 67326]);

// bind -> same as call but with variable
// const getSaravana = display.bind(saravana, "usa", 57326);
// getSaravana();
// getSaravana();
// getSaravana();

// POLYFILLS -> customising the javascript methods
// const nums = [1, 2, 3, 4, 5];
// const data = [1, 2, 3, 4, 5];
// // never use arrow function -> {}

// Array.prototype.sum = function () {
//   let total = 0;
//   for (let num of this) {
//     // this -> nums or any [obj] where [obj].sum()
//     total += num;
//   }
//   return total;
// };

// const total = nums.sum();
// const total = data.sum();
// console.log(total);

// CALLBACK

// callback methods
// first class functions

// function circle(radius = 0) {
//   return 3.14 * radius * radius;
// }

// function square(side = 0) {
//   return side * side;
// }

// function rectangle(length = 0, width = 0) {
//   return length * width;
// }

// function area(shape, ...args) {
//   // area -> first class function, shape -> callback fn(paramter which accepts function)
//   const totalArea = shape(...args);
//   return totalArea;
// }

// console.log(area(circle, 5));
// console.log(area(square, 5));
// console.log(area(rectangle, 10, 20));

// example -> sort
// const nums = [1, 5, 2, 99, 100, 34];
// console.log(nums.sort((a, b) => b - a));

// map
// get square of all given nums
// const nums = [1, 2, 3, 4, 5];
// output: [1, 4, 9, 16, 25];

// const sqNums = nums.map((data, index, arr) => {
//   console.log(data, index, arr);
//   return data * data;
// });
// console.log(sqNums);

// const cubeNums = nums.map((data, index, arr) => {
//   console.log(data, index, arr);
//   return data * data * data;
// });

// console.log(cubeNums);

// custom MAP
const nums = [1, 2, 3, 4, 5];
Array.prototype.vasanthMap = function (callbackFn) {
  let result = [];
  for (let i = 0; i < this.length; i++) {
    if (this[i] > 3) {
      // custom logic
      const output = callbackFn(this[i], i, this);
      result.push(output);
    }
  }
  return result;
};

const result = nums.vasanthMap((data, index, arr) => {
  console.log(data, index, arr);
  return data * data;
});
console.log(result);
