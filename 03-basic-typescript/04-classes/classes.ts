class Stark {
    name: string = "Brandon";
    saying : string;
    static castle : string = "Winterfell castle!";

    constructor(){
        this.saying = "Winterfell!";
    }

    hello (person: String) {
        console.log("Hello, "+person+"!");
    }

}

var ned = new Stark();
ned.saying = "Winter is coming";
ned.hello("Bivek");

// We can call static properties like following: 
console.log(Stark.castle);

// notes: property in class cannot be declared optional, which is valid for php also