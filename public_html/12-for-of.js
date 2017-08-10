const arr = [1, 2, 3, 4];

// for..of -> to get value in array
for(let val of arr) {
  // console.log(val); // -> 1,2,3,4
}

// for..in -> to get index in array
for(let idx in arr) {
  // console.log(idx); // -> 0,1,2,3
}

let map = new Map();
map.set('key', 'val');
map.set('key2', 'something');

for(let val of map) {
  console.log(val);
}
