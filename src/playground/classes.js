class Car {
  constructor(make, model, vin) {
    this.make = make;
    this.model = model;
    this.vin = vin;
  }

  getDescription() {
    const obj = {
      make: this.make,
      model: this.model,
      vin: this.vin,
    }
    return obj;
  }
}

const car = new Car('Vehicle', 'Toyota', '123');
console.log(car.getDescription());