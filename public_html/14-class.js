// Class

class myClass {
  constructor(id, name) {
    this.id = id;
    this.name = name;
  }

  someMethod() {
    console.log('exec someMethod');
  }

  static logMethod() {
    console.log('This is static method');
  }

  set name(name) {
    this._name = name;
  }

  get name() {
    return this._name;
  }
}

let nismit = new myClass(123, 'nismit');
nismit.someMethod();
nismit.name = 'changed name';
console.log(nismit.name);
myClass.logMethod();



class Animal {
    constructor(name) {
      this.name = name;
    }

    speak() {
      console.log(this.name + ' makes some noise');
    }
}

class Cat extends Animal {
  // override
  speak() {
    console.log(this.name + ' meooow');
  }

  meowing() {
    console.log('Meow');
  }
}


let monkey = new Animal('saru');
monkey.speak();
// monkey.meowing(); // is not a function

let kitten = new Cat('neko');
kitten.speak();
kitten.meowing();
