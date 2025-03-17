// Task 1: Double the Numbers
// Objective: Double each number in an array.
// Instructions: Given an array of numbers, use the map method to create a
//  new array where each number is doubled.

let arr = [3, 5, 4, 3, 2, 25, 4, 12, 8, 9];
console.log("orginal array ", arr);

let doubleArray = arr.map((val) => {
  return val + val;
});
console.log("Double each element ");

console.log(doubleArray);

// Task 2: Using map
// Objective: Create a new array with each element squared.
// Instructions: Given an array of numbers, use the map method to create a new array
// where each element is the square of the original element.
let squareArray = arr.map((val) => {
  return val * val;
});
console.log("Square each element ");

console.log(squareArray);

// Task 3: Using filter
// Objective: Filter out even numbers.
// Instructions: Given an array of numbers, use the filter method to
// create a new array that contains only the odd numbers.

let oddArray = arr.filter((val) => {
  if (val % 2 == 1) return val;
});
console.log("Odd Numbers ");

console.log(oddArray);

// Task 4: Filter Long Words
// Objective: Filter out words longer than 5 characters.
// Instructions: Given an array of words, use the filter method
// to create a new array that contains only words with 5 or fewer characters.

let wordsArray = [
  "html",
  "css",
  "javascript",
  "Vineeth",
  "kumar",
  "Springboot",
];

console.log(wordsArray);

let moreThenLengthFive = wordsArray.filter((val) => {
  return val.length > 5;
});

console.log("More then 5 characters in word ");
console.log(moreThenLengthFive);
