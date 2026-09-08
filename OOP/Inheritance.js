// Inheritance

class Parent {
  breathe() {
    console.log("breatheing................");
  }

  walking() {
    console.log("walking...........");
  }

  eating() {
    console.log("eating.........");
  }
}

class Child extends Parent {
  speak() {
    console.log("speaking......");
  }

  jump() {
    console.log("jumping.....");
  }
}

const parent = new Parent();
const child = new Child();

parent.breathe();
child.speak();
child.breathe();
