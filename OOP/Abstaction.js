// Abstraction

class coffeeMachine {
  #boilWater() {
    setTimeout(() => {
      console.log("water is boiling...");
    }, 1000);
  }

  #crushBeans() {
    setTimeout(() => {
      console.log("crushing beans...");
    }, 4000);
  }

  makeCoffee() {
    this.#boilWater();
    this.#crushBeans();
    setTimeout(() => {
      console.log("Here is Your coffee!");
    }, 9000);
  }
}

const machine = new coffeeMachine();

machine.makeCoffee();
