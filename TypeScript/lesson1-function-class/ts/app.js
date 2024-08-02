// function app (a:number,b:number):void{
//         console.log(a,b);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// }
// const  app= (a:number,b:number):void=>{
//     console.log(a,b);
// }
// app(10,20);
// Class start
var Car = /** @class */ (function () {
    function Car(brand, price, active) {
        this.ibrand = brand;
        this.iprice = price;
        this.iactive = active;
    }
    Car.prototype.calculateSpeed = function () {
        return this.ibrand;
    };
    return Car;
}());
var myCar = new Car("BMW X5", 40000, true);
// console.log(myCar.iprice);
var Moto = /** @class */ (function (_super) {
    __extends(Moto, _super);
    function Moto(brand, price, active) {
        return _super.call(this, brand, price, active) || this;
    }
    Moto.prototype.getInfo = function () {
        return this.iprice;
    };
    return Moto;
}(Car));
