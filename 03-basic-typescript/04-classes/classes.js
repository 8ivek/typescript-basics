var Stark = /** @class */ (function () {
    function Stark() {
        this.name = "Brandon";
        this.saying = "Winterfell!";
    }
    Stark.prototype.hello = function (person) {
        console.log("Hello, " + person + "!");
    };
    Stark.castle = "Winterfell castle!";
    return Stark;
}());
var ned = new Stark();
ned.saying = "Winter is coming";
ned.hello("Bivek");
// We can call static properties like following: 
console.log(Stark.castle);
// notes: property in class cannot be declared optional, which is valid for php also
// 
