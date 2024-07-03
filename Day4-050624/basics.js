// pipes and compose

function add(num) {
  return num + 5;
}

function mul(num) {
  return num * 5;
}

function square(num) {
  return num * num;
}

const num = 2;

const pipe = function (...fns) {
  return function pipedFns(initialValue) {
    return fns.reduce(function (acc, currFn) {
      return currFn(acc);
    }, initialValue);
  };
};

const compose = function (...fns) {
  return function composedFns(initialValue) {
    return fns.reduceRight(function (acc, currFn) {
      return currFn(acc);
    }, initialValue);
  };
};

// const pipedFns = pipe(add, mul, square);
// console.log(pipedFns(num));
const composedFns = compose(add, mul, square); // reverse of pipe
console.log(composedFns(num));
// let result = add(num);
// result = mul(result);
// result = square(result);

// console.log(result);

const nums = [1, 2, 3];
// const result = nums.reduce(function (acc, curr) {
//   console.log(curr);
//   return acc + curr;
// }, 0);

Array.prototype.VasanthReduce = function (callBackFn, initialValue) {
  let acc = undefined;
  if (initialValue) {
    acc = initialValue;
    for (let i = 0; i < this.length; i++) {
      acc = callBackFn(acc, this[i]);
    }
  } else {
    acc = this[0];
    for (let i = 1; i < this.length; i++) {
      acc = callBackFn(acc, this[i]);
    }
  }
  return acc;
};

const result = nums.VasanthReduce(function (acc, curr) {
  return acc + curr;
}, 10);

console.log("result", result);
