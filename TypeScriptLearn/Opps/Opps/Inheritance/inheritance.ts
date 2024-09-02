// Single Inheritance - A Child class inherits from one parent class



//-------------------------------------------------//
// Multilevel Inheritance - A class inherits from a derived class, forming a chain of inheritance

class Animal {
    name: string;

    constructor(name: string) {
        this.name = name;
    }
}


class Mammal extends Animal {
    hasFur: boolean;

    constructor(name: string, hasFur: boolean) {
        super(name);
        this.hasFur = hasFur;
    }
}


class Dog extends Mammal{
    breed: string;

    constructor(name:string, hasFur: boolean, breed: string) {
        super(name, hasFur);
        this.breed = breed;
    }
}


let myDog = new Dog("Buddy", true, "Golden Retriever");

console.log(myDog);


// Hierarchical Inheritance - Multiple classes inherit from a single parent class.
// Hybrid Inheritance - A Combination of two or more types of Inheritance.



// ----------------- Access Modifiers -------------------------------

// Public: The public modifier allows properties and methods to be accessible from anywhere. By default, all properties and methods are public if no access modifier is specified.

// Eg:

class Users {
    public name: string;
    public age: number;


    constructor(name:string, age:number) {
        this.name = name;
        this.age = age;
    }
}


let user = new Users("Sasi", 22);
console.log(user.name);



// Private: This modifier restricts access to properties and methods to within the class itself. They cannot be accessed outside the class.


class details {
    private pinNumber: number;

    constructor(pinNumber: number) {
        this.pinNumber = pinNumber;
    }

    getPin() : number {
        return this.pinNumber;
    }
}

let detail = new details(246810);
console.log(detail.getPin());
// console.log(detail.pinNumber); // Property 'pinNumber' is private and only accessible within class 'details'.


// Protected: This modifier allows access to propeties and methods within the class and its subclass but not outside of it.

class Employee {
    protected employeeId: number;


    constructor(employeeId: number){
        this.employeeId = employeeId;
    }

    protected getEmployeeId() : number {
        return this.employeeId;
    }
}


class Manger extends Employee {
    department : string;

    constructor(employeeId: number, department : string) {
        super(employeeId);
        this.department = department;
    }

    showDetails() : void {
        console.log(`Manager ID: ${this.getEmployeeId()}, Department: ${this.department}`);
    }
}


let manager = new Manger(22, "Engineering");
manager.showDetails(); // Manger ID: 22, Department: Engineering

// console.log(manager.employeeId); //Property 'employeeId' is protected and only accessible within class 'Employee' and its subclasses.ts(2445)


// ------------------------ Static Methods in TypeScript-------------------------- 

// Static Methods: this belong to the class itself rather than to the instances of the class. They can be called without creating an object of the class.


class MathSum {
    static add(num1: number, num2: number) : number {
        return num1 + num2
    }

    // Try to do this for multiplication, divison, subtraction, moduls
}

let sum = MathSum.add(5, 3);
console.log(sum);


// -------------------- Interfaces in TypeScript --------------------------------

interface Payment {
    amount: number;
    processPayment() : void;
}


class CreditCardPayment implements Payment {
    amount: number;
    cardNumber : string;


    constructor(amount: number, cardNumber: string) {
        this.amount = amount;
        this.cardNumber = cardNumber;
    }

    processPayment() : void {
        console.log(`Processing credit card payment of ${this.amount} using card number ${this.cardNumber}`);
    }

}

class paypal implements Payment {
    amount: number;
    email : string;


    constructor(amount: number, email: string) {
        this.amount = amount;
        this.email = email;
    }

    processPayment() : void {
        console.log(`Processing paypal payment of ${this.amount} for account ${this.email}`);
    }

}

//Online Payment - Qr-code, netbanking


let payment1 : Payment = new CreditCardPayment(200, "9876-5432-1011-5000");
payment1.processPayment();


let payment2 : Payment = new paypal(250, "sanjay@gmail.com");
payment2.processPayment();


/* 

Payment Interface: Defines the structure for any payment method, including an amount and a processPayment() method.
CreditCardPayment Class: Implements the Payment interface, handling payments made with a credit card. It has an additional property cardNumber to store the card details.
PayPalPayment Class: Implements the Payment interface as well, but for payments made through PayPal. It includes an additional property email to store the user's PayPal account email.

*/