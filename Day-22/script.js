// Task 5: Sum of Numbers
// Objective: Calculate the sum of all numbers in an array using reduce method.
// Instructions: Given an array of numbers, use the reduce method to
// calculate the sum of all the numbers.

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let newArr = arr.reduce((sum, val) => {
  return sum + val;
}, 0);

console.log(newArr);

// Task 6: Calculate Average
// Objective: Calculate the average of an array of numbers.
// Instructions: Given an array of numbers,
//  use the reduce method to calculate the average.

let arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let newArrr = arr1.reduce((sum, val) => {
  return sum + val / arr1.length;
}, 0);

console.log(newArrr);

// Task 7: Filter Adults
// Objective: Filter out people who are under 18.
// Instructions: Given an array of objects representing people, use the filter method to create a new array that contains only people who are 18 or older.
const people = [
  { name: "John", age: 17 },
  { name: "Jane", age: 22 },
  { name: "Jim", age: 15 },
  { name: "Jack", age: 19 },
];

let newPeople = people.filter((peop) => {
  return peop.age < 18;
});
console.log(newPeople);
