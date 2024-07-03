// loops -> normal for, for-of loop, for-in loop
// for in -> objects
// for of -> async operations of array

// scope
// // var -> function scope
// for (var i = 0; i < 5; i++) {
//   setTimeout(() => {
//     console.log(i); // 5 5 5 5 5
//   }); // by default 0
// }
// console.log("outside", i);

// it forms closure
// closure -> the child binds with lexical(parent) environment forms closure
// for (let i = 0; i < 5; i++) {
//   setTimeout(() => {
//     console.log(i); // 0 1 2 3 4
//   }); // by default 0
// }

// closure ->
function parentFn() {
  let name = "vasanth";
  let age = 10;

  return function child() {
    console.log(name);
  };
}

const childFn = parentFn();
childFn();
