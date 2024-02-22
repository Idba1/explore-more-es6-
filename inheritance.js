class Vehicle{
    constructor(name, price){
        this.name = name;
        this.price = price;
    }
    move(){
        console.log('gari chole na chole na chole na re')
    }
}

class Bus extends Vehicle{
    constructor(name, price, seat, ticketPrice){
        super(name, price);
        this.seat = seat;
        this.ticketPrice = ticketPrice;
    }

}

class Truck extends Vehicle{
    constructor(name, price, load){
        super(name, price);
        this.load = load;
    }
}

const mahindra = new Truck('mahindra', 1000000, '50taan');
console.log(mahindra);

const labiba = new Bus('labiba', 1200000, 55, 550);
console.log(labiba);

const janbahon = new Vehicle('labiba', 1200000);
console.log(janbahon);