// Defining class and creating objects

// defining a class
class Cars {
    make: string;
    model: string;
    year: number;
    // Classes Defining


    constructor(make: string, model: string, year: number) {
        this.make = make;
        this.model = model;
        this.year = year;
        // Constructing - A constructor is a special method that is automatically called when a new
        // object is created. It is used to initialize the propertise of the object
    }

    displayDetails() : void {
        console.log(`${this.make} ${this. model}, ${this.year}`)
    }
    // Method 

}


// creating objects
let myCar = new Cars("Toyota", "Innova", 2023);
let newCar = new Cars("Tata", "Harrier", 2024);

myCar.displayDetails(); //Output: Toyota Innova, 2023
newCar.displayDetails();


// ---------------- Property, Methods, and Constructors ---------------------

class Rectangle {
    width: number;
    height: number;


    //constuctor
    constructor(width: number, height: number) {
        this.width = width;
        this.height = height;
    }

    //method
    area(): number {
        return this.width * this.height
    }
}

// creating a object
let myarea = new Rectangle(3, 10);
console.log(myarea.area());


//---------------Handling Inheritance ----------------

class ElectricCar extends Cars {
    batteryCapacity: number;


    constructor(make: string, model: string, year: number, batteryCapacity: number) {
        super(make, model, year);  // Call the parent class constructor
        this.batteryCapacity = batteryCapacity;
    }

    displayBattery(): void {
        console.log(`${this.make} ${this.model} has a battery capacity of ${this.batteryCapacity} kWh`);
    }
}

let myElectricCar = new ElectricCar("Tesla", "S", 2021, 60);
myElectricCar.displayDetails();
myElectricCar.displayBattery();