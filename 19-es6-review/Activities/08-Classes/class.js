// ES5 constructor function
function Car(make, acceleration) {
  this.make = make;
  this.acceleration = acceleration;
  this.speed = 0;

  this.accelerate = function() {
    this.speed += this.acceleration;
    console.log("Current speed: " + this.speed);
  };

  this.brake = function() {
    this.speed = 0;
    console.log("Stop!");
  };
}

var car1 = new Car("honda", 20);
car1.accelerate();
car1.accelerate();
car1.brake();

// ES6 class
class Vehicle {
  // the initialization becomes its own function now
  constructor(make, acceleration) {
    this.make = make;
    this.acceleration = acceleration;
    this.speed = 0;
  }

  // along with any custom methods. note that we aren't using "this.x = function()" syntax anymore.
  accelerate() {
    this.speed += this.acceleration;
    console.log("Current speed: " + this.speed);
  }

  brake() {
    this.speed = 0;
    console.log("Stop!");
  }
}

// but the end result is the same
var vehicle1 = new Vehicle("toyota", 25);
vehicle1.accelerate();
vehicle1.accelerate();
vehicle1.brake();