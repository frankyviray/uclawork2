class FirstClass {
  // we can define initial values in the constructor
  constructor() {
    this.name = "Joe";
  }

  // and then define any methods/functions outside
  printName() {
    console.log(`Hi, my name is ${this.name}.`);
  }
}

// we can create a new class based on other classes by extending them
class SecondClass extends FirstClass {
  constructor() {
    // we need to call super() here to run the constructor on the parent class
    super();

    // "this" actually belongs to the parent class
    this.job = "button factory";
  }

  printJob() {
    console.log(`I work in a ${this.job}.`);
  }
}

let test = new SecondClass();

// because SecondClass extended FirstClass, this object has access to the parent class's methods
test.printName();

test.printJob();