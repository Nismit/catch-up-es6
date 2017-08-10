function multipleArgs(...args) {
  console.log(args.join(','));
}

multipleArgs('args1','args2','args3');

function multiply(base = 2, ...args) {
  return args.map(val => {
    return base * val;
  });
}

multiply(2,1,2,3); // -> [2,4,6]
multiply(undefined, 7, 8, 9); // -> [14, 16, 18]

function f(...[a, b, c]) {
  return a + b + c;
}

f(1); // -> NaN
f(1, 2, 3); // -> 6
f(1, 2, 3, 4); // -> 6 except "4" because of accept 3 args
