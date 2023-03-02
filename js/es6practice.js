
class Car{
    wheels=0;
    constructor(wheels){
        this.wheels=wheels;
    }
    drive(){
        console.log("driving on "+this.wheels+" wheels");
    }
}
class Bike extends Car{
    wheels=0;
    constructor(wheels){
        super(wheels);//mandatory
        this.wheels=wheels;
  }
    ride(){
        console.log("Bike is runnong on "+this.wheels+" wheels");
    }
}

const b=new Bike(2);
console.log(b.ride());
console.log(b.drive());