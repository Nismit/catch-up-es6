// let name = value;
// cost name = value;

let foo = 'This variable can be re-assign later';
const bar = 'Const is short for constants, the variable can not re-assign when you define it';

foo = 'Re-assign some value';
// bar = 'Can not re-assign value!!';
// -> TypeError: Assignment to constant variable.

// var str = 'Something text';
const str = 'Something text';

{
  let str = 'let and const are block scoped';
  // const str = 'Const text'; // -> Can use const variable in this block
  console.log(str); // -> let and const are block scoped
}

console.log(str); // -> Something text

var arr = [1,2,3];
for(let i = arr.length; i--;) {
  console.log(i); // i is a for loop block scoped
}

let i = 'Out of for loop block';
