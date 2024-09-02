// String

let message : string = "This is simple sting"
console.log(message);


// Number
let count : number = 30;
console.log(count);

//  Array
let numbers : number[] = [1, 2, 3, 4, 5];
console.log(numbers);

// Object
let person : {name : string, age: number} = {name : "Sasi", age : 22};
console.log(person);

//Tuple
let tuple : [string, number] = ["Sasi", 25];
console.log(tuple);


//Enum
enum Car {volvo, range}
let c: Car

console.log();

//Void-This type is used when a function does not return a value;

function logMessages() : void {
    console.log("This functions returns nothing");
}


// NULL

let someVl : string | null = null;
console.log(someVl);