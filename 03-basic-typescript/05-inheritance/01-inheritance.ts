class Animal {
    name: String ;
    constructor(theName: string) { this.name = theName; }
    move (distanceInMeters: number = 0) {
        console.log(`${this.name} has moved ${distanceInMeters}m.`);
    }
}

class Dog extends Animal {
    constructor(name: string) {super(name);}
    move(distanceInMeters = 5) {
        console.log("Running...");
        super.move(distanceInMeters);
    }
    bark() {
        console.log('Woof! Woof');
    }
}


class Horse extends Animal {
    constructor(name: string) {super(name);}
    move(distanceInMeters = 45) {
        console.log("Galloping...");
        super.move(distanceInMeters);
    }
}

const dog = new Dog('Bruno');
dog.bark();
dog.move(10);
dog.bark();

let lucky = new Dog("Lucky the Pug");

let candy: Animal = new Horse ("Candy the Horse");

lucky.move();
candy.move(34);