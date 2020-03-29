 // Optional parameter and mandatory parameter
 
interface Stark {
    name : String;
    age?: Number;
}


function printName (stark : Stark) : void {
    console.log(stark.name);
}

printName ({name: "Bivek"});
printName ({name:"Jon"});