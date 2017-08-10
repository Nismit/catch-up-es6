let set = new Set();

set.add('value');

set.has('value'); // -> true

set.size; // -> 1

set.values(); // -> SetIterator { 'value' }

let obj = { a: 123, b: 'text' }
set.add(obj);

set.has(obj); // -> true

set.entries(); 
// -> SetIterator { [ 'value', 'value' ], [ { a: 123, b: 'text' }, { a: 123, b: 'text' } ] }
