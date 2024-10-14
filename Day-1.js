// variables and datatype

// Variables are placeholders which used to store some data

// datatypes -> primitive(built-in) and reference datatype
// primitive -> number, string, boolean, undefined, null
// reference -> object, array, function

// var fname = 'vasanth'; // var - function scope
// console.log('fname: ', typeof fname);
// var age = -10.0;
// console.log('age: ', typeof age);
// var isValid = false;
// console.log('isValid: ', typeof isValid);
// var memoryNotCreated = undefined; // not recommended
// console.log('memoryNotCreated: ', typeof memoryNotCreated);
// var memoryCreatedButValueNotCreated = null;
// console.log(
//   'memoryCreatedButValueNotCreated: ',
//   typeof memoryCreatedButValueNotCreated
// ); // default -> Object

// declaration and definition
// var data; // declaration
// console.log(data); // undefined -> JS default datatype
// var data = 10; // definition or initialization
// console.log(data);

// var data = 10;
// data = 20; // re-initialization or re-assigning the data
// console.log(data);

// var is not recommended

// var data = 'File 1';
// console.log(data);
// var data = 'File 2'; // re-declaration
// console.log(data);

// let and const -> block scope
// let data = 'File 1';
// console.log(data);
// data = 'File 2';
// console.log(data);

// const PI = 22 / 7; // can be initialized but can't be re-assigned
// PI = 10;
// console.log(PI);

// statically typed vs dynamically typed

// statically typed -> C, C++, Java, C# -> Value changes but memory is constant
// int age = 10;
// age = 'vasanth' // error

// dynamically typed -> JS, Python -> Scripting langs -> Memory itself changed
// let age = 10;
// console.log(age, typeof age);
// age = 'vasanth';
// console.log(age, typeof age);

// Operators
// Arithmetic operators
// console.log(10 + 5);
// console.log(10 - 5);
// console.log(10 * 5);
// console.log(10 / 3); // value will be in decimal
// console.log(10 % 3); // modulus -> remainder
// console.log(10 ** 3); // exponentiation -> power

// // math module
// console.log(Math.floor(10 / 3));

// Assignment Operators -> =
// let a = 10;

// let age = 10;
// age = age + 5;
// age += 5; // same as above
// age -= 5;
// age *= 5;
// age /= 5;
// age %= 5;
// age **= 5;

// comparison operators -> always return boolean
// >, <, >=, <=, ==, !=, ===, !==

// let a = 10;
// let b = 5;
// console.log(a < b);
// console.log(a > b);
// console.log(a >= b);
// console.log(a <= b);
// console.log(a == b);
// console.log(a != b);

// === -> also checks datatype -> recommended
// let a = '10';
// let b = 10;
// console.log(a == b, a === b);
// console.log(a !== b);

// ternary operator
// condition ? true_statement: false_statement
// 10 > 50 ? console.log('greater') : console.log('smaller');

// string
// let firstName = 'Vasanthkumar';
// let lastName = 'Vinayagam';

// Vasanthkumar Vinayagam
// console.log(firstName, lastName);

// Vasanthkumar Vinayagam is a good boy
// console.log(firstName + ' ' + lastName + ' ' + 'is a good boy');

// template literals
// console.log(`${firstName} ${lastName} is a good boy`);

// Poem -> multiline string -> template literals
// Johnny Johnny yes papa
// Eating sugar no papa
// Telling lies no papa
// Open your mouth hahahaha
// console.log(`Johnny Johnny yes papa
// Eating sugar no papa`);

// weird things of Js
// console.log(5 + 5); // 10
// console.log(5 + '5'); // 55
// console.log(5 - '5'); // 0
// console.log(5 + 5 + '5'); // 105
// console.log('5' + 5 + 5); // 555
// console.log('5' + '5'); // 55
// console.log('abc' + 10); // abc10
// console.log('abc' - 10); // NaN -> Not a Number
// console.log('abc' * 10); // NaN
// console.log('10' * 10); // 100
// console.log('10' / 10); // 1
// console.log('abc' / 10); // NaN
// console.log('10' * '10'); // 100
// console.log('10' / '10'); // 1
// console.log(2 + '4' + '-10' + 10); // 24-1010
// console.log(2 + '4' - '-10' + 10); // 44

// conditional statements
// if, if-else, else if ladder, switch case

// let age = 100;
// if (age >= 18) {
//   console.log('Eligible to vote');
// } else {
//   console.log('Not Eligible to vote');
// }

// block -> {} -> to treat multiple lines as a single line
// if (age >= 18) console.log('Eligible to vote');
// else console.log('Not Eligible to vote');

// if (age >= 18) {
//   console.log('Eligible to vote');
//   console.log('Line 2 ');
// } else console.log('Not Eligible to vote');

// let day = 0;
// if (day === 0) {
//   console.log('Sunday');
// } else if (day === 1) {
//   console.log('Monday');
// } else if (day === 2) {
//   console.log('Tuesday');
// } else if (day === 3) {
//   console.log('Wednesday');
// } else if (day === 4) {
//   console.log('Thursday');
// } else if (day === 5) {
//   console.log('Friday');
// } else if (day === 6) {
//   console.log('Saturday');
// } else {
//   console.log('Invalid input');
// }

// let day = 10;
// switch (day) {
//   case 0:
//     console.log('Sunday');
//     break;
//   case 1:
//     console.log('Monday');
//     break;
//   default:
//     console.log('Invalid input');
// }

// logical operators
// && -> logical AND
// || -> logical OR
// ! -> logical NOT

// short circuiting
// let age = 20;
// let isVoterIDAvailable = true;

// if (age >= 18 && isVoterIDAvailable) {
//   console.log('Eligible to vote');
// } else {
//   console.log('Not Eligible');
// }

// last executed statement
// console.log(console.log(10));

// falsy values
// 0, false, '', undefined, null, NaN
// function isEven(num) {
//   console.log('checking even or not');
//   return num % 2 === 0;
// }

// let age = 5;
// if (age > 10 && isEven(age)) {
//   // last executed statement
//   console.log('inside if');
// } else {
//   console.log('inside else');
// }

// const isValid = 10 > 5 && 'valid';
// console.log(isValid);

// console.log(1 > 2 > 3); // false
// console.log(3 > 2 > 1); // false -> (3 > 2) -> true -> (true > 1) -> false

// logical NOT
// console.log(!'vasanth');
// console.log(!!'vasanth'); // to get boolean -> !!
// console.log(!!undefined);
// console.log(Boolean('vasanth'));
// console.log(Boolean(undefined));

// decimal to binary
// 10 -> 1010
