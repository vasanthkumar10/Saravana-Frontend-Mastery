// this -> always points to parent object
// whenever a function is executed, a new execution context is created (this => global memory)

// console.log("global", this); // empty
// // console.log("global", globalThis); // global object

// function demo() {
//   // IIFE -> parent
//   console.log("demo", this);
// }

// const obj = {
//   name: "saravana",
//   age: 10,
//   display: function () {
//     console.log("display", this);
//     // function child() {
//     //   // display fn is the parent
//     //   console.log(
//     //     "child",
//     //     this,
//     //     `My name is ${this.name} and I'm ${this.age}yrs old`
//     //   );
//     // }

//     const child = () => {
//       // arrow fn always points to first top level object
//       console.log(
//         "child",
//         this,
//         `My name is ${this.name} and I'm ${this.age}yrs old`
//       );
//     };
//     child();
//   },
// };

// obj.display();
