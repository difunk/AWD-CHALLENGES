import { useState } from "react";
import type { Profile } from "../types/Profile"

class Car {
  make: string;
  model: string;
  year: number;
  
  constructor(title: string, author: string, pages: number) {
    this.make = title;
    this.model = author;
    this.year = pages;
  }

  getDetails(): string {
    return `${this.year}, ${this.make} ${this.model}.`;
  }
}

class BankAccount {
    private balance: number;
    public readonly accountNumber: string;

    constructor(accountNumber: string, balance: number){
        this.balance = balance;
        this.accountNumber = accountNumber;
    }

    public deposit(amount: number): void {
        if (amount <= 0){
            console.log("Betrag muss positiv sein!")
            return
        }
        this.balance += amount;
    }

    public withdraw(amount: number): void {
        if (amount <= 0){
            console.log("Betrag muss positiv sein!")
            return
        }
        this.balance -= amount;
    }

    public getBalance(): number{
        return this.balance;
    }
}

class UserProfile{
    private _email: string

    constructor(email: string){
        this._email = email;
    }

    get email(): string{
        return this._email;
    }

    set email(email: string) {
        if (!email.includes("@")) {
            console.log("Email must contain @")
            //   throw new Error("Email must contain '@'");
        }
        this._email = email;
    }
}

class Employee {
    public name: string;

    constructor(name: string){
        this.name = name;
    }
    
    getDetails(): string{
        return `${this.name}`
    }
}

class Manager extends Employee {
    public department: string;

    constructor(name: string, department: string){
        super(name);
        this.department = department;
    }

    getDetails(): string{
        return `${this.name} works in ${this.department}`;
    }
}

class MathHelper{
    static pi = 3.14;

    static circleArea(radius: number): number{
        return this.pi*radius**2;
    }
}

abstract class Shape {
    name: string;

    constructor(name: string){
        this.name = name;
    }

    abstract getArea(): number;
}

class Rectangle extends Shape {
    width: number;
    height: number;

    constructor(width: number, height: number){
        super("Rectangle");
        this.width = width;
        this.height = height;
    }

    getArea(): number {
        return this.width * this.height;
    }
}

class Circle extends Shape {
    radius: number;

    constructor(radius: number){
        super("Circle");
        this.radius = radius;
    }

    getArea(): number {
        return this.radius**2*Math.PI;
    }
}

interface Animal {
    name: string,
    makeSound(): string
}

class Dog implements Animal {
    name: string;

    constructor(name: string){
        this.name = name;
    }

    makeSound(): string {
        return `${this.name} makes Woff!`;
    }
}

interface MathOperation{
    (x: number, y: number): number;
}

type Coordinates = {
  x: number;
  y: number;
};

interface Movable {
  move(dx: number, dy: number): void;
}

class Point implements Movable, Coordinates{
    x: number;
    y: number;

    constructor(x: number, y: number){
        this.x = x,
        this.y = y
    }

    move(dx: number, dy: number): void{
        this.x += dx;
        this.y += dy;
        console.log(point)
    }
}

const myBook = new Car("Toyota", "Corolla", 2022);
console.log(myBook.getDetails());

const myAccount = new BankAccount("43824908789014", 500);
myAccount.deposit(200);
myAccount.withdraw(100);
console.log(myAccount.getBalance());

const user = new UserProfile("john@example.com");
console.log(user.email);
user.email = "wrongemail";

const manager = new Manager("Alice", "Engineering");
console.log(manager.getDetails());

const shapes: Shape[] = [new Rectangle(4, 5), new Circle(3)];
shapes.forEach(shape => console.log(`${shape.name} area: ${shape.getArea()}`));

const dog = new Dog("Rex");
console.log(dog.makeSound());

const add: MathOperation = (x: number, y: number) => x+y;
const multiply: MathOperation = (x: number, y: number) => x*y;
console.log(add(1,2))
console.log(multiply(3,5))

const point = new Point(0, 0);
point.move(5, 3);
point.move(-4, 2);
point.move(12, 9);

const Challenge20 = () => {
  const [point, setPoint] = useState(new Point(0, 0));

  const movePoint = (dx: number, dy: number) => {
    point.move(dx, dy);
    setPoint(new Point(point.x, point.y));
  }

const buttonStyle = {
    border: "2px solid black",
    borderRadius: "8px",
    padding: "8px 16px",
    margin: "6px",
    backgroundColor: "#f0f0f0",
    cursor: "pointer",
    fontWeight: "bold",
    transition: "background-color 0.3s ease",
};

  return (
    <>
        <div style={{ backgroundColor: "white", border: "2px solid black", borderRadius: "12px", padding: "12px", margin: "12px"}}>
            <div style={{ marginBottom: "12px"}}>
                <p style={{ fontWeight: "bold"}}>
                    1. Creating Basic Classes
                </p>
                <p>
                    Objective: Practice class creation and constructors.
                </p>
                <div>
                    {myBook.getDetails()}
                </div>
            </div>

            <div style={{ marginBottom: "12px"}}>
                <p style={{ fontWeight: "bold"}}>
                    2. Working with Access Modifiers
                </p>
                <p>
                    Objective: Use private, public, and protected for encapsulation.
                </p>
                <div>
                    {`Account Number: ${myAccount.accountNumber}, Current Balance: ${myAccount.getBalance()}`}
                </div>
            </div>

            <div style={{ marginBottom: "12px"}}>
                <p style={{ fontWeight: "bold"}}>
                    3. Getters and Setters
                </p>
                <p>
                    Objective: Encapsulate data using getter and setter methods.
                </p>
                <div>
                    {user.email}
                </div>
            </div>

            <div style={{ marginBottom: "12px"}}>
                <p style={{ fontWeight: "bold"}}>
                    4. Inheritance and Method Overriding
                </p>
                <p>
                    Objective: Implement inheritance and override base class methods.
                </p>
                <div>
                    {manager.getDetails()}
                </div>
            </div>

            <div style={{ marginBottom: "12px"}}>
                <p style={{ fontWeight: "bold"}}>
                     5. Static Members
                </p>
                <p>
                    Objective: Use static methods and properties.
                </p>
                <div>
                    {`Circle Area of 5: ${MathHelper.circleArea(5)}`}
                </div>
            </div>

            <div style={{ marginBottom: "12px"}}>
                <p style={{ fontWeight: "bold"}}>
                     6. Abstract Classes
                </p>
                <p>
                    Objective: Implement abstract classes and enforce contract in subclasses.
                </p>
                <div>
                    {shapes.map((shape, index) => (
                        <div key={index}>{shape.name} area: {shape.getArea()}</div>
                    ))}
                </div>
            </div>

            <div style={{ marginBottom: "12px"}}>
                <p style={{ fontWeight: "bold"}}>
                      7. Interfaces and Class Implementation
                </p>
                <p>
                    Objective: Use interfaces to enforce structure.
                </p>
                <div>
                    {dog.makeSound()}
                </div>
            </div>

            <div style={{ marginBottom: "12px"}}>
                <p style={{ fontWeight: "bold"}}>
                      8. Function Interfaces
                </p>
                <p>
                    Objective: Define function types with interfaces.
                </p>
                <div>
        
                </div>
            </div>


            <div style={{ marginBottom: "12px"}}>
                <p style={{ fontWeight: "bold"}}>
                      9. Interface vs Type Alias
                </p>
                <p>
                    Objective: Understand when and how to use interfaces vs type aliases.
                </p>
                <div>
                    <p>Aktuelle Position: ({point.x}, {point.y})</p>
                    <button style={buttonStyle} onClick={() => movePoint(5, 3)}>Move by (5, 3)</button>
                    <button style={buttonStyle} onClick={() => movePoint(-4, 2)}>Move by (-4, 2)</button>
                    <button style={buttonStyle} onClick={() => movePoint(12, 9)}>Move by (12, 9)</button>
                </div>
            </div>
        </div>
    </>
  )
}

export default Challenge20