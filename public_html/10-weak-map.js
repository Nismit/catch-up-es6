let weak = new WeakMap();

let obj = { id: 123, name: 'nismit' };
let arr = [1, 2, 3];
let o1 = {};

weak.set(obj, 'an object');
weak.set(o1, 32);

weak.get(obj); // -> an object

weak.has(o1); // -> true
