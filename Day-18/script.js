// 1)Add elements to an array and iterate using for loop and for in loop and for of loop
// Create an array of your favorite movies and iterate an array  to the console.

let array = [5, 7, 5, 7, 2, 1, "vineeth", true, 6.7];

for (var i = 0; i < array.length; i++) {
  console.log(array[i]);
}

console.log("Using for in loop");

for (let x in array) {
  console.log(array[x]);
}

console.log("Using for of loop");

for (let i of array) {
  console.log(i);
}

// 2)Remove elements from an array
// Remove the first and last elements from the array.

let removeArray = [5, 7, 8, 9, "vineeth", "kumar"];
console.log(removeArray);
removeArray.pop();
removeArray.shift();
console.log(removeArray);

// 3)Reverse an array using for loop
// hints
// use push method
console.log("Reverse an array using for loop");

let normalArray = [5, 7, 8, 9, "vineeth", "kumar"];
let reverseArray = [];
console.log(normalArray);

for (let x in normalArray) {
  reverseArray.unshift(normalArray[x]);
}
console.log(reverseArray);

// 4) find the even and odd numbers in an array [12,3,5,6,22,56,29]
// and print the evensum and oddsum

let evenOdd = [12, 3, 5, 6, 22, 56, 29];
let evenSum = 0;
let oddSum = 0;
for (let i of evenOdd) {
  if (i % 2 == 0) {
    evenSum += i;
  } else {
    oddSum += i;
  }
}
console.log("Even sum is ", evenSum);
console.log("Odd sum is ", oddSum);

// 5) Take a heterogenious array and separate each data type into new array
// hints : use loop, typeof and push method
// inp: let arr = ["apple", "banana", "mango", "banana", 3, 4, 5, 6, true, {name: "object"}];
// out :
// num=[3,4,5,6]
// str=["apple","banana","mango","banana"]
// bool=[true]
// obj=[{name: "object"}]

let arr = [
  "apple",
  "banana",
  "mango",
  "banana",
  3,
  4,
  5,
  6,
  true,
  { name: "object" },
];
let num = [];
let str = [];
let bool = [];
let obj = [];

for (let i of arr) {
  if (typeof i == "string") {
    str.push(i);
  } else if (typeof i == "number") {
    num.push(i);
  } else if (typeof i == "boolean") {
    bool.push(i);
  } else {
    obj.push(i);
  }
}
console.log(num);
console.log(str);
console.log(bool);
console.log(obj);

// Task 1: Using concat
// Objective: Merge two or more arrays.
// Task: Create two arrays, one with your favorite sports and one with your favorite hobbies. Use the concat method to merge them into a single array.
// Expected Output: Display the merged array.

let mergeOne = [3, 4, 5, 6, true, { name: "object" }];
let mergeTwo = ["apple", "banana", "mango", "banana"];

console.log("Merging two arrays ");
console.log(mergeOne.concat(mergeTwo));

// Task 2: Using splice
// Objective: Modify an array by adding, removing, or replacing elements.
// Task: Create an array of numbers from 1 to 10. Use the splice method to remove the numbers 4, 5, and 6, and replace them with the numbers 40, 50, and 60.
// Expected Output: Display the array before and after the splice operation.
console.log("Splice Method");

let modifyArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
modifyArray.splice(3, 3, "40", "50", "60");

console.log(modifyArray);

// Task 3: Using slice
// Objective: Extract a portion of an array without modifying the original array.
// Task: Create an array of the days of the week. Use the slice method to create a new array that contains only the weekdays.
// Expected Output: Display the original array and the new array.

// Task 4: Using join
// Objective: Convert an array to a string.
// Task: Create an array of words that form a sentence. Use the join method to combine them into a single string with spaces between each word.
// Expected Output: Display the resulting sentence.

let strArray = ["html", "css", "javascript", "python"];

let joinString = strArray.join(" ");
console.log(joinString);

// Task 5: Using sort
// Objective: Sort the elements of an array.
// Task: Create an array of random numbers. Use the sort method to sort the numbers in ascending order.
// Expected Output: Display the sorted array.
let sortArray = [6, 8, 10, 5, 43, 76, 332, 2, 3];
sortArray.sort((a, b) => a - b);
console.log(sortArray);
