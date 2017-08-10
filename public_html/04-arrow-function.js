// (param1, param2,..., paramN) => { statements }
// (param1, param2,..., paramN) => expression

// (param) => { statements }
// OR
// param => { statements }

// () => { statements }

const arr = [1, 2, 3, 4, 5];

arr.forEach(val => {
  console.log(val);
});

arr.filter((val, idx, array) => {
  return val >= 3;
});
// -> [ 3, 4, 5 ]
