let fullName: string = "John Doe";
let age: number = 30;

console.log(fullName.toLowerCase());
console.log(age.toString());

// Non Exception failure

const user = {
  name: "Alice",
  age: 25,
};

console.log(user.location); // returns undefined, no exception thrown

const announcement = "Hello World!";
 
// How quickly can you spot the typos?
announcement.toLocaleLowercase();
announcement.toLocalLowerCase();
 
// We probably meant to write this...
announcement.toLocaleLowerCase();


function flipCoin() {
  // Meant to be Math.random()
  return Math.random < 0.5;
// Operator '<' cannot be applied to types '() => number' and 'number'.
}