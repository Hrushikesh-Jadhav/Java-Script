// Object
let dog = {
  breed: "desi",
  color: "white",
  bark() {
    console.log("bhoooo bhoooo!");
  },
};

dog.bark();

// Class

class Animal {
  constructor(name, sound) {
    this.name = name;
    this.sound = sound;
  }
  speak() {
    console.log(`${this.name} makes a sound like ${this.sound}`);
  }
}

let animal = new Animal("Dog", "bhoo bhoo!");
animal.speak();
