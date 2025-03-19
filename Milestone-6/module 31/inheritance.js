class Vehicle{
    constructor(name,price){
        this.name = name;
        this.price = price
    }
}

class Bus extends Vehicle{
    constructor(name,price,seat,route){
        super(name,price);
        this.seat = seat;
        this.route = route;
    }
}

const lalsobuj = new Bus('Lal Sobuj',500,41,'Dhaka-Noakhali');
console.log(lalsobuj);
console.log(lalsobuj.name);
console.log(lalsobuj.route);