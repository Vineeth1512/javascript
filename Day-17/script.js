//Task 1: take prompt and Convert to Uppercase

// let userInput = prompt("Enter the name").toLowerCase();
// console.log(userInput);

//Task 2: take prompt and Convert to Lowercase

// let userInput = prompt("Enter the name").toUpperCase();
// console.log(userInput);

//Task 3: take prompt and Reverse a String

//  let userInput = prompt("Enter the name");
//  console.log(userInput.split("").reverse().join(""))

//  Task 4: take prompt and Count the number of vowels in a string--
//  hints use match method
//---------------------------------------------------------------------------
// let userInput = prompt("Enter the name").toLowerCase();
//  console.log(userInput.match(/ [aeiou]/gi));

// let matches = userInput.match(/[aeiou]/gi);
// console.log(matches);
// let count = matches ? matches.length : 0;
// console.log(count);
//------------------------------------------------------------------------
// Task 1: take prompt and Convert to Uppercase
// Task 2: take prompt and Convert to Lowercase
// Task 3: take prompt and Reverse a String
// hints: use split and reverse and join method
// Task 4: take prompt and Count the number of vowels in a string--
// hints use match method

// advanced

// Task 2: Email Formatter
// Scenario: Format an email address. Task:
// Prompt the user to enter their first and last name.
// Convert the names to lowercase and concatenate them with a dot in between.
// concat “@gmail.com” to the result and display the formatted email address.
// inp: jenny and joy
// out: jenny.joy@gmail.com
//----------------------------------------------------------------------------------------------
// let firstName = prompt("Enter the first name").toLowerCase();
// let lastName = prompt("Enter the last name").toLowerCase();
// let fullName = `${firstName}${lastName}.@gmail.com`;

// console.log(fullName);
//-----------------------------------------------------------------------------------------------------
// Task 3: Word Counter
// Scenario: Count the number of words in a sentence. Task:
// Prompt the user to enter a sentence.
// Split the sentence into words and count them.
// Display the word count.
// Hint: use split and length method
//------------------------------------------------------------------------------------------------------
// let str = "  Count the number of words in a sentence";
// console.log(str.trim().split(" ").length);
//--------------------------------------------------------------------------------------------------
// Task 4: Palindrome Checker
// Scenario: Check if a given string is a palindrome. Task:
// Prompt the user to enter a string.
// Check if the string reads the same forwards and backwards.
// Display a message indicating whether the string is a palindrome
// Hints : use split,join, reverse method in arrays
// inp:john
// out: not a palandrome
// inp:dad
// out:it is a palandrome
/*
let userInput = prompt("Enter the value for palindorme")
  .toLowerCase()
  .trim()
  .replace(/ /g, "");

let palindrom = userInput.split("").reverse().join("");
console.log(userInput);
console.log(palindrom);

if (userInput === palindrom) {
  console.log("Its Palindrome");
} else {
  console.log("Not palindrome");
}
*/
