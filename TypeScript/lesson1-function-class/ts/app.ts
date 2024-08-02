// function app (a:number,b:number):void{
//         console.log(a,b);
        
// }

// const  app= (a:number,b:number):void=>{
//     console.log(a,b);
    
// }

// app(10,20);



// Class start
class Car{
    private ibrand:string;
    protected iprice:number;
    public iactive:boolean;
    constructor(brand:string,price:number,active:boolean){
        this.ibrand=brand;
        this.iprice=price;
        this.iactive=active;
    }
    public calculateSpeed(){
        return this.ibrand;
    }
}

const myCar = new Car("BMW X5",40000,true);

// console.log(myCar.iprice);

class Moto extends Car{
    constructor(brand:string,price:number,active:boolean){
        super(brand,price,active);
    }
    public getInfo(){
        return this.iprice
    }
}
