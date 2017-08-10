// function [name](param1[= defaultValue1],...paramN[= defaultValueN])

function multiply(a, b = 1) {
  return a * b;
}

multiply(2, 3); // -> 6
multiply(7, 1); // -> 7
multiply(4); // -> 4

function foo(num = 1) {
  console.log(typeof num);
}

foo(); // -> number
foo(undefined); // -> number
foo(''); // -> string

function append(val, array = []) {
  array.push(val);
  return array;
}

append(1); // -> [1]
append(3); // -> [3]

function callAnother(sth = something()) {
  return sth;
}

function something() {
  return 'execute something';
}

callAnother(); // -> execute something
