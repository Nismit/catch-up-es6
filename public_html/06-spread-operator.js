// ...arg

const arr = [2, 3, 4];
let combineArr = [1, ...arr, 5, 6]; // -> [1, 2, 3, 4, 5, 6]

function foo(a, b, c) {
  return a + b + c;
}

foo(...arr); // -> 9

let [a, b, ...c] = [1, 2, 3, 4, 5];
console.log(a); // -> 1
console.log(b); // -> 2
console.log(c); // -> [3, 4, 5]

let array1 = [4, 5, 6];
let array2 = [10, 11, 12];
array1.push(...array2); // [4, 5, 6, 10, 11, 12]
