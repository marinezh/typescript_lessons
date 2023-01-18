// const product: {
//   id: string;
//   price: number;
//   tags: string[];
//   details: {
//     title: string;
//     description: string;
//     hobbies: object;
//   };
// } = {
//   id: "abc1",
//   price: 12.99,
//   tags: ["great-offer", "hot-and-new"],
//   details: {
//     title: "Red Carpet",
//     description: "Agreat carpet - almost brand-new!",
//     hobbies: ["sport", "cooking", "swimming"],
//   },
// };

// console.log(product);

// const person: { name: string; age: number; hobbies: string[] } = {
//   name: "Gordei",
//   age: 10,
//   hobbies: ["sport", "cooking", "swimming"],
// };

// // let favAct: string[];
// // favAct = ["sport"];

// console.log(person.name);

// for (const hobby of person.hobbies) {
//   console.log(hobby);
// }

// check the code above
////////////////////////////////
// let code: string | number | boolean;

// code = 12345;
// code = "ASD";
// code = false;

// console.log(code);

// type Combinable = number | string;
// type ConversionDescriptor = "as-number" | "as-text";
// function combine(
//   input1: Combinable,
//   input2: Combinable,
//   resultConversion: ConversionDescriptor
// ) {
//   let result;
//   if (
//     (typeof input1 === "number" && typeof input2 === "number") ||
//     resultConversion === "as-number"
//   ) {
//     result = +input1 + +input2;
//   } else {
//     result = input1.toString() + input2.toString();
//   }
//   return result;
// }
// const combineages = combine(30, 25, "as-number");
// console.log(combineages);
// const combinestrings = combine("30", "25", "as-number");
// console.log(combinestrings);
// const combinednames = combine("James ", "Bond", "as-text");
// console.log(combinednames);

// type StringorNum = string | number;
// type objWithName = { name: string; uid: StringorNum };

// const logDetails = (uid: StringorNum, item, string) => {
//   console.log(`${item} has a uid of ${uid}`);
// };

// const greet = (user: objWithName) => {
//   console.log(`${user.name} says hello`);
// };

// console.log(logDetails(1, "test", "James"));
// console.log(logDetails(1, "test2", "Tom"));

// ////////////////////////
// ///////////////////////

// function add(n1: number, n2: number) {
//   return n1 + n2;
// }
// function printerResult(num: number): void {
//   console.log("Result: " + num);
// }
// printerResult(add(5, 12));
// let combinedValues: (a: number, b: number) => number;
// //let combinedValues;
// combinedValues = add;
// console.log(combinedValues(8, 8));

// const button = document.querySelector("button");

// button.addEventListener("click", () => console.log("clicked....."));
