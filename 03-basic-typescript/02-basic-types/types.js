var isWinter = false;
isWinter = true;
var count = 5;
var namee = "Bran";
var names = ["John", "Rickon", "Arya"];
var names1 = ["John", "Rickon", "Arya", 2];
// Enum
var Starks;
(function (Starks) {
    Starks[Starks["Jon"] = 0] = "Jon";
    Starks[Starks["Bran"] = 1] = "Bran";
    Starks[Starks["Eddard"] = 2] = "Eddard";
    Starks[Starks["Catlyn"] = 3] = "Catlyn";
})(Starks || (Starks = {}));
;
var cat = Starks.Catlyn;
// function
// Return type for following function getName is String
function getName() {
    return "Bivek"; // if we return 1; it will give us error because the return type for this function (getName) is String 
}
console.log('My name is: ' + getName());
// Return type of following function is void
function printSomething() {
    var i = 20;
    console.log('Winter is coming in ' + i + ' days');
}
printSomething();
