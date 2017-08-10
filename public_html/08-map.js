// make a map
let map = new Map();

// set key and value
map.set('key', 'value');

// get value from key
let val = map.get('key'); // -> value

// get map size
map.size; // -> 1

// check key
map.has('key'); // -> true

// delete data
map.delete('key');
map.has('key'); // -> false

// delete all data
map.clear();

map.set('anotherKey', 'anotherValue');
map.get('anotherKey'); // -> anotherValue

let value = 'something value';
map.set('foo', value);
map.get('foo'); // -> something value

value = 'changed value';
map.get('foo'); // -> something value which means map value is not influenced the variable

// re-assign value
map.set('foo', value);
map.get('foo'); // -> changed value

let keys = map.keys(); // -> MapIterator { 'anotherKey', 'foo' }
let values = map.values(); // -> MapIterator { 'anotherValue', 'changed value' }

map.entries(); // -> MapIterator { [ 'anotherKey', 'anotherValue' ], [ 'foo', 'changed value' ] }

for(let key of keys) {
  console.log(key);
}

map.forEach((val, key, map) => {
  console.log('VALUE:' + val);
  console.log('KEY:' + key);
  console.log('MAP:' + map);
});
