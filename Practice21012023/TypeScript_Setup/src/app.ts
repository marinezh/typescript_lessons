// Code goes here!
console.log("Welcome to TS World!");

// const button = document.querySelector("button");
// console.log("button", button);

// button.addEventListener("click", () => console.log("clicked..."));

const add = (x: number, y: number): number => x + y;

const mult = (x: number, y: number): number => x * y;
const division = (x: number, y: number): number => {
  if (y != 0) {
    return x / y;
  } else {
    console.log("error");
    return NaN;
  }
};

const printOutput: (a: number | string) => void = (output) =>
  console.log("test", output);

console.log(add(5, 4));
console.log(mult(5, 4));
console.log(division(5, 0));
console.log(division(500, 5));
printOutput(add(5, 3));

const hobbies = ["sleeping", "reading", "cooking"];

const activeHobbies = ["hiking"];

activeHobbies.push(hobbies[0], hobbies[1]);
activeHobbies.push(...hobbies);

console.log(activeHobbies);

const person = {
  name: "james",
  age: 36,
};

const copiedPerson = { ...person };
console.log(copiedPerson);

class Department {
  name: string;

  constructor(n: string) {
    this.name = n;
  }
}

const it = new Department("IT department");
console.log(it);

class Product {
  title: string;
  price: number;
  private isListed: boolean;

  constructor(name: string, pr: number) {
    this.title = name;
    this.price = pr;
    this.isListed = true;
  }
}

class Product1 {
  private isListed: boolean;
  constructor(public title: string, public price: number) {
    this.isListed = true;
  }
}
