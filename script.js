// LECTURE 5 - Functions & Methods

// Function Definition
function myFunction() {
  console.log("Welcome to Apna College!");
  console.log("We are learning JS :)");
}

myFunction(); // Function Call

function myFunction2(msg) { // parameter -> input
  console.log(msg);
}

myFunction2("I love JS"); // argument

// Function to calculate sum of 2 numbers
function sum(a, b) {
  console.log(a + b);
}
sum(5, 10);

// return wala function
function sum2(a, b) {
  let s = a + b;
  return s;
}

let val = sum2(3, 4);
console.log(val);

// Arrow Functions => modern JS
// sum function
function sum3(a, b) {
  return a + b;
}

const arrowSum = (a, b) => {
  console.log(a + b);
};
arrowSum(3, 4);

// multiplication function
function mul(a, b) {
  return a * b;
}

const arrowMul = (a, b) => {
  return a * b;
  // or - const arrowMul = (a, b) => a * b;
};

console.log(arrowMul(5, 4));

// Practice Qs - Create a function using the "function" keyword that takes a String as an argument & returns the number of vowels in the string.
function countVowels(str) {
  let count = 0;
  for (let char of str) {
    if (
      char === "a" ||
      char === "e" ||
      char === "i" ||
      char === "o" ||
      char === "u" ||
      char === "A" ||
      char === "E" ||
      char === "I" ||
      char === "O" ||
      char === "U"
    ) {
      count++;
    }
  }
  return count;
}

console.log(countVowels("ApnaCollege"));

// Same with Arrow Function
const countVow = (str) => {
  let count = 0;
  for (let char of str) {
    if (
      char === "a" ||
      char === "e" ||
      char === "i" ||
      char === "o" ||
      char === "u"
    ) {
      count++;
    }
  }
  return count;
};

console.log(countVow("hello"));

// forEach Loop in Arrays - only for arrays, not for strings
let arr = [1, 2, 3, 4, 5];

arr.forEach(function printVal(val) {
  console.log(val);
});

// arrow function me
arr.forEach((val) => {
  console.log(val);
});

let cities = ["pune", "mumbai", "delhi"];

cities.forEach((val, idx, arr) => {
  console.log(val.toUpperCase(), idx, arr);
});

// Practice Qs - For a given array of numbers, print the square of each value using the forEach loop.
// [1,2,3,4,5]

let nums = [1, 2, 3, 4, 5];

nums.forEach((num) => {
  console.log(num * num); // num**2
});

// More Array Methods

// Map - creates a new array with the results of some operation
let numbers = [67, 52, 39];

let newArr = numbers.map((val) => {
  return val * 2;
});
console.log(newArr);

// Filter - creates a new array of elements that give true for a condition
let arr2 = [1, 2, 3, 4, 5, 6, 7];

let evenArr = arr2.filter((val) => {
  return val % 2 === 0;
});
console.log(evenArr);

// Reduce - performs some operations & reduces the array to a single value
let arr3 = [1, 2, 3, 4];

let output = arr3.reduce((prev, curr) => {
  return prev + curr;
});
console.log(output);

let output2 = arr3.reduce((prev, curr) => {
  return prev > curr ? prev : curr;
});
console.log(output2); // largest number

// Practice Qs - We are given array of marks of students. Filter out the marks of students that scored 90+.
let marks = [87, 93, 64, 99, 86];

let toppers = marks.filter((val) => {
  return val > 90;
});
console.log(toppers);
