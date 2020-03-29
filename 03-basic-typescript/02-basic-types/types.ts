var isWinter : boolean = false;
isWinter = true;

var count : Number = 5;
var namee : String = "Bran";

var names : String[] = ["John", "Rickon", "Arya"];

var names1 : any[] = ["John", "Rickon", "Arya", 2];

// Enum
enum Starks {Jon, Bran, Eddard, Catlyn};
var cat :Starks = Starks.Catlyn;

// function

// Return type for following function getName is String
function getName() : String {
    return "Bivek"; // if we return 1; it will give us error because the return type for this function (getName) is String 
}
console.log('My name is: ' + getName());

// Return type of following function is void
function printSomething(): void {
    let i : Number = 20;
    console.log('Winter is coming in '+ i + ' days');
}
printSomething();