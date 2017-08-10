
function user(id, name) {
  return {
    id,
    name
  };
};

let a = user(123, 'nismit');
console.log(a.name);

let obj = {
  message: 'Hello, World',
  hello() { // -> short hand syntax (without 'function()')
    return this.message;
  }
};

obj.hello(); // -> Hello, World

const key = 'name';
let name = 'John';

let keyObj = {
  [key]: name
};

keyObj.name // -> John
