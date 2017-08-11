const Foo = (() => {
  const privateProp = Symbol('privateProp');
  const privateFunc = Symbol('privateFunc');

  class Foo {
    constructor() {

    }

    set bar(val) {
      this[privateProp] = val;
    }

    get bar() {
      return this[privateProp];
    }

    [privateFunc]() {
      return 'private function';
    }

    get fooBar() {
      return this[privateFunc];
    }
  }

  return Foo;
})();

let classObj = new Foo();
classObj.bar = 'test';

console.log(classObj.bar);
console.log(classObj.fooBar());
