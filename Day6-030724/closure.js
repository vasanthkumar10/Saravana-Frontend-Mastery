// closure -> function bound with lexical(parent) scope
// function parent() {
//   let name = "vasanth";
//   let age = 10;

//   return function child() {
//     // let name = "saravana";
//     console.log("name", name, "age", age);
//   };
// }

// const childFn = parent();
// childFn();

// whenever a function is returned from another fn, it also bounds(carry) the dependent info

// interview qns
// function getCounter() {
//   let count = 1;
//   return function counter() {
//     count % 3 == 0 && console.log(count);
//     count += 1;
//   };
// }

// const counter = getCounter();

// counter();
// counter();
// counter();
// counter();
// counter();
// counter();

// const paraElement = document.getElementById("para");
// console.log(paraElement);

// paraElement.addEventListener("click", () => {
//   console.log("para clicked");
// });

// paraElement.removeEventListener("click");

function getCredentials() {
  // assume making an API call
  const email = "abc@gmail.com";
  const password = "1234";

  return function (username) {
    if (username === "admin") {
      return { email, password };
    }
    return "unauthorised";
  };
}

const authorizeAndGetData = getCredentials();
console.log(authorizeAndGetData("user"));
console.log(authorizeAndGetData("admin"));
