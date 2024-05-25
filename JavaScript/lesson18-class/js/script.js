class Car {
  constructor(title, color, year) {
    this.brand = title;
    this.mycolor = color;
    this.myyear = year;
  }

  getData() {
    return `Car name:${this.brand} | Car color: ${this.mycolor} | Car year: ${this.myyear} `;
  }
  calculateSpeed(km, hour) {
    return `${this.brand} speed : ${km / hour}km/h`;
  }
}



Car.prototype.newCar = true;

const a = Car.prototype;
console.log(a);


// ===================================================================================

class Moto extends Car {
  constructor(title, color, year) {
    super(title, color, year);
  }

}



const myCar = new Car("BMW", "black", 2022);
console.log(myCar.newCar);
console.log(myCar.getData());
// ====================================================

const myMoto = new Moto("Yamaha", "red", 1990);

console.log(myMoto.getData());
console.log(myMoto.calculateSpeed(300, 0.5));
console.log(myCar.calculateSpeed(200, 0.4));