// Polymorphism

class Animal {
  speak() {
    console.log("Animal is Speaking.....");
  }

  sleep() {
    console.log("Sleeping......");
  }
}

class Dog extends Animal {
  speak() {
    console.log("Bhow Bhow");
  }
}

class Cat extends Animal {
  speak() {
    console.log("Meow Meow");
  }
}

const shiro = new Dog();
const simba = new Cat();

shiro.speak();
simba.speak();
