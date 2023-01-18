console.log("Your code goes here...");

var addTwoNumbers = function (
  a: number,
  b: number,
  showResult: boolean,
  phrase: string
) {
  //   if (typeof a !== "number" || typeof b !== "number") {
  //     throw new Error("wrong input");
  //   }

  const result = a + b;
  if (showResult) {
    console.log(phrase + result);
  } else {
    return result;
  }
};
console.log(addTwoNumbers(14, 4.5, true, "result is"));
