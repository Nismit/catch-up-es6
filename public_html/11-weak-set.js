let weak = new WeakSet();

let obj = { a: 123 };
weak.add(obj);

weak.has(obj); // -> true
weak.delete(obj);

weak.has(obj); // -> false
