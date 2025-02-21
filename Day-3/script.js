let num = +prompt("Enter a number");

let even_Odd = num % 2 == 0 ? "Even" : "Odd";

console.log(even_Odd);

let age = +prompt("Enter your age");

let isValid = age >= 18 ? "Eligible to vote" : "Not eligible to vote";

console.log(isValid);

let marks = +prompt("Enter your marks");

let grade =
  marks >= 90
    ? "A"
    : marks >= 75
    ? "B"
    : marks >= 60
    ? "C"
    : marks >= 45
    ? "D"
    : "E";

console.log(grade);

let temparature = +prompt("Enter temperature");

let result =
  temparature <= 10
    ? "Cold"
    : temparature > 10 && temparature < 19
    ? "Cool"
    : temparature > 20 && temparature <= 30
    ? "Warm"
    : "Hot";
console.log(result);

let person_age = 34;

let age_result =
  person_age >= 0 && person_age <= 12
    ? "Child"
    : person_age > 13 && person_age <= 19
    ? "Teen"
    : person_age >= 20 && person_age <= 64
    ? "Adult"
    : "Senior";

console.log(age_result);
