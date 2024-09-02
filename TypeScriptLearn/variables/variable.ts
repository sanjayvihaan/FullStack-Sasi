// Three main primitives in JS and TS
/* 
    1. Boolean - true, false
    2. number - whole number, decimal number
    3. string - "", ''


Two less common primitives in JS and TS
    1. bigint - whole number, decimal number but it can hold or allows larger negative or positive
    2. symbol - creating a global unique identifier.
*/



// let name = "sanjay"

// -------------------------Type Assignement-------------------------
// 1. Explicit
// 2. Implicit

//--------- Explicit----------

var firstName: string = "Sanjay";


//--------- Implicit -------------

var firstName = "sanjay";


//-------------------------Error in Type Assignment---------------------

let fName: string = "Sasi";
console.log(fName);
fName = "sanjay";
// fName = 33; // attempts to re-assign the value to a different type

console.log(firstName);
console.log(fName);

//-------- About any

let value: any = 5;
value = "Sasi"; //No error, type can change


//----------------- Static and Dynamic Type ---------------------------

//---- Static
let num : number = 25;
num = "tweny five" // Error

//---- Dynamic

let numerical = 35;
numerical = "Thirty five";


console.log(num);
console.log(numerical);