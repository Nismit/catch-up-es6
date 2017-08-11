// new primitive type Symbol
// Symbol is unique

let symbol = Symbol('key');
let anotherSymbol = Symbol('key');

console.log(symbol === anotherSymbol); // false
