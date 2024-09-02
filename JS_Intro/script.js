console.log("Hello world");


// display on the screen 

//let, var, const

let sent = document.getElementById('display').innerHTML = "Hello World to JavaScript";

sent.innerHTML = "Testing with new sentence";

console.log(sent);



// JavaScript Variables:

//var & let - It can delcare a Javascript variable

var carName = "Volvo";
console.log(carName);


carName = "Range Rover";
console.log(carName);


let number = 5;
number = 10;

// var : Redeclare, reassign 
// let : redeclare the values
// const : static values which cannot changed at all.
const password = "helloWorld";
console.log(password);


let value1 = 12;
let value2 = 2;
let result = value1 + value2;
console.log(result);

value1 = 20; 
value2 = 5;
result = value1 + value2;
console.log(result);


// JavaScript Opertors

let a = 5;
let b = 6;

console.log("addition = ",a + b);
console.log("subtraction = ", a - b);
console.log("multiplication = ", a * b);
console.log("division = ", a / b);
console.log("modulus = ", a % b);
console.log("a = a + b = ", a += b);
console.log("a = a - b = ", a -= b);
console.log("a = a / b = ", a /= b);
console.log("a = a * b = ", a *= b);
console.log("Increment operator", a++);
console.log("Decrement Operator", a--);
console.log("Is a equal to b : ", a == b);
console.log("power of ", a, "^", b, "=", a ** b);
console.log('typeof "hello$" = ', typeof"hello$");
console.log("AND OPERATOR 4>3 && 4<1", 4>3 && 4<1);
console.log("OR OPERATOR 4>3 || 4<1", 4>3 || 4<1);
console.log("NOT OPERATOR !(true)", !(true));


// Data Types

let age = 18;
let name = "Sasi";
let details = {first: "sasi", last: "Preetham"};
let truth = true;
let skills = ["HTML", "CSS", "JS", "Python"];
let sasi;
let val = null;

console.log(typeof(age));
console.log(typeof(name));
console.log(typeof(details));
console.log(typeof(truth));
console.log(typeof(skills));
console.log(typeof(sasi));
console.log(val);

// 

/* 
    kdfjd
*/

//Output Methods
//alert(skills); // output in an alet box
//confirm(skills); //yes/no dialog or returs true/false
//let nae = prompt("You Name?");
// console.log(nae);



// ----------------- Day 3 JS Intro -----------------------

// for 
// while loop
// do while loop

// for : 1 - 100

for (let i = 0; i <= 100; i++ ){
    console.log(i);
}


// for loop - table
let num = 12;

for (let i = 1; i<= 20; i++){
    let mul = `${num} * ${i} = ${num * i}\n`;
    console.log(mul);
}


// While loop

let counter = 1;

while(counter <= 5) {
    console.log("Sanjay while", counter);
    counter++;
}


// real case example of while loop

// let personName = prompt("Enter you name");

// while (personName === "" || personName === null) {
    // personName = prompt("Name cannot be empty, enter your name");
// }

// console.log(`Welcome ${personName}`);



// do while loop:

do {
    console.log("Sanjay do while", counter)
    counter++
} while(counter <= 10);



let numbers = [1,2, 3, 4, 5, 6, 7];
let sum = 0;
let lengNumber = numbers.length;
//console.log(lengNumber)


for (let i = 0; i < lengNumber; i++) {
    sum += numbers[i]; // sum = sum + number[i]
}


console.log(`The sum of the array is: ${sum}`);

// ------------------------- String Methods -----------------------


        // String Length
        // let a = prompt("Enter a string");
        // alert("The Lenght of " + a + " is " + a.length)

        // String Concatination 
        let str1 = "This Is JavaScript";
        let str2 = "This Is Css (joined using concat() function)";
        let results = str1.concat(" " + str2);
        console.log(results)

        // subString Fetching using substr() function
        let longStr = "This Is JavaScript, a scripting language";
        let newStr = longStr.substr(8, 6);
        console.log(newStr + " (using substr() function)");

        // subString Fetching using substring() function
        let longString = "This Is JavaScript, a scripting language";
        let newString = longString.substring(8, 18);
        console.log(newString + " (using substring() function)");


        // substr() takes a starting index and a length.
        // substring() takes a starting index and an ending index.
        // In your example:

        // substr(8, 10) returns "JavaScrip".
        // substring(8, 18) returns "JavaScript".
        
        // finding position of a character
        let indexString = "This Is JavaScript and It Is good and easy to understand ";
        console.log(indexString.indexOf("good") + " is the indexof  using indexOf() function");

        // finding position of a character by skipping first occurances
        indexString = "This Is JavaScript and It Is good and easy to understand ";
        console.log(indexString.indexOf("and", 25) + " using indexOf('', number) function");

        // finding position of a character in reverse order
        indexString = "This Is JavaScript and It Is good and easy to understand ";
        console.log(indexString.lastIndexOf("JavaScript") + " using lastIndexOf() function");

        // trimming white space from start and end of the string
        indexString = " This Is JavaScript and It Is good and easy to understand ";
        console.log(indexString.trim());


        // trimming white space only from the start of the string 
        indexString = " This Is JavaScript and It Is good and easy to understand ";
        console.log(indexString.trimStart());

        // trimming white space only from the end of the string
        indexString = " This Is JavaScript and It Is good and easy to understand ";
        console.log(indexString.trimEnd());

        // Check if a subString exists in a string or no
        indexString = " This Is JavaScript and It Is good and easy to understand ";
        console.log(indexString.includes('easys') + " using includes() function");


        indexString = " This Is JavaScript and It Is good and easy to understand ";
        let trimmedString = indexString.trim();
        let stringRemoveSpaces = trimmedString.replace(/\s+/g, '');
        console.log(stringRemoveSpaces);

        console.log(indexString.trim());
    

// ------------------ Functions --------------------

function helloWorld() {
    console.log("Hello world");
}

helloWorld();


// function with arguments / parameter

function greetUser(name = "Guest") {
    console.log(`Hello ${name} welcome to our community`);
}


y = mult(5, 20);

greetUser("Sasi");
greetUser();

// Arguments property in function

function length() {
    console.log(arguments.length);
}

length("helloworld", 6, "World");


// return in function:

let x = mult(4, 3);

function mult(a, b) {
    return a * b;
}

console.log(y);

function toCelsius(fahren) {
    return (5/9) * (fahren - 32);
}

let celsisuValue = toCelsius(77);

console.log(celsisuValue);


// Global and local variable

// Global variable: are declared outside the function and can be used throught out the program
// Local variable: are declared inside the function and can be used only inside the function

let an = 30; // Global Variable

function adding(){
    let bn = 20; // Local Variable
    console.log(an + bn);
}

adding();


// ----- Ananymous function

// function(){
    // function body
// }

var greeting = function(){
    console.log("Welcome to learning");
}


greeting();

var greets = function(academy) {
    console.log(`Welcome to ${academy}`);
}

greets("Fita Academy");

// IIFE

(function (){
    let sasi = "Developer";
    console.log(sasi);
})();

// Arrow function


let hello = function(){
    return "Hello World"
}

console.log(hello());

let hi = (val) => {
    return `Hello world from ${val}`;
}

console.log(hi("Arrow function"));


// ---------------------- Dates -------------------

let date = new Date();
console.log(date);


console.log(date.toTimeString());
console.log(date.getDay());


console.log(Date("2020-06-09")) // 

console.log(date.getHours());

consol.log()