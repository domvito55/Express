class Vehicle {
    constructor(wheels) {
        this.wheels = wheels;
    }
    toString() {
        return 'number of wheels: ' + this.wheels + '\n';
    }
}
class Car extends Vehicle {
    constructor(color) {
    super(4); //constructor of parent class
    this.color = color;
    }

    toString() {
        return super.toString() + 'colored: ' + this.color;
    }
}

let car = new Car('blue');
console.log(car.toString());
console.log(car instanceof Car);
console.log(car instanceof Vehicle);
