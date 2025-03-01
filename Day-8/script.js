// Task 1: Greeting Function
// Scenario: Create a function that takes a name as an argument
// and returns a greeting message.
// Task:
// Define a function greet that takes one parameter name.
// The function should print a greeting message like “Hello, [name]!”.
// Call the function with different names and print the results.

function greeting(name) {
  console.log("Hello ", name, "welcome to javascript");
}

//let message = prompt("Enter your Name");
greeting("vineeth");

// Task 2: Sum Function
// Scenario: Create a function that takes two numbers as arguments and
//  returns their sum.
// Task:
// Define a function sum that takes two parameters a and b.
// The function should return the sum of a and b.
// Call the function with different numbers and print the results.

function sum(a, b) {
  return a + b;
}
console.log(sum(5, 7));

// Task 3: Square Function
// Scenario: Create a function that takes a number as an argument
//  and returns its square.
// Task:
// Define a function square that takes one parameter num.
// The function should return the square of num.
// Call the function with different numbers and
// print the results.

function square(a) {
  return a * a;
}

console.log("Square of a given number is ", square(4));

// Task 4: Average Function
// Scenario: Create a function that takes an array of numbers
// as an argument and returns the average.
// Task:
// hint:[2,5,2] =9/3=3
// Define a function average that takes one parameter arr.
// The function should return the average of the numbers in arr.
// Call the function with different arrays and print the results.

function average(arr) {
  sum = 0;
  for (i in arr) {
    sum += arr[i];
  }
  console.log("sum is :", sum);
  console.log("number of elements : ", arr.length);

  return sum / arr.length;
}
let arr = [4, 6, 7, 3];

console.log("Average of given array :", average(arr));

// Task 5:  Vowels Function
// Scenario: Create a function that takes a string as an argument and
// returns weather the strings contains vowels or not .
// Task:
// Define a function that takes one parameter str.
// The function should return whether string contains vowels or not.
// use loops and if conditions
// Call the function with different strings and print the results.
// hello --a,e ,i ,o,u---it contains vowels
// hll---it doesnt contains vowels

function vowels(str) {
  for (let i = 0; i < str.length; i++) {
    if (
      str[i] == "a" ||
      str[i] == "e" ||
      str[i] == "i" ||
      str[i] == "o" ||
      str[i] == "u"
    ) {
      return "it contains vowels";
    }
  }
  return "it doesnt contains vowels";
}

console.log(vowels("hello"));
console.log(vowels("hll"));

// Task 6: Temperature Converter
// Scenario: Create a function that converts temperatures between Celsius and Fahrenheit.
// Task:
// Define a function convertTemperature that takes two parameters: temp (the temperature) and
//  scale (the scale to convert to, either “C” or “F”).
// The function should return the converted temperature.
// Test the function with different temperatures and scales and print the results.
// Hints:-
// formula for celscious (temp - 32) * 5/9
// formula for fahrehnheit (temp * 9/5) + 32

function tempConverter(temp, scale) {
  if (scale == "C") {
    return ((temp - 32) * 5) / 9;
  } else if (scale == "F") {
    return (temp * 9) / 5 + 32;
  }
}
console.log("C to F", tempConverter(29, "C"));
console.log("F to C", tempConverter(45, "F"));
