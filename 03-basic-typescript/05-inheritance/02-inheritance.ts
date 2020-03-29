class Person {
    protected name : string;
    constructor(name: string) {
        this.name = name;
    }
    dance() {
        console.log(`${this.name} is dancing!`);
    }
}

var bran = new Person('Bran');
bran.dance();

class AwesomePerson extends Person {
    constructor(name: string) {
        super(name);
    }
    dance() {
        console.log(`So awesome!`);
        super.dance();
    }
}

var robb = new AwesomePerson("Robb");
robb.dance();