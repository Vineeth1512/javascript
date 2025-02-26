// Print Multiples of 5 up to 50
for (i = 1; i <= 50; i++) {
  if (i % 5 == 0) {
    console.log(i);
  }
}
// Sum of Numbers from 1 to 100
sum = 0;
for (i = 0; i <= 100; i++) {
  sum += i;
}
console.log("sum of 100 numbers is ", sum);
num = +prompt("Enter a number for factorial : ");

// Create a JavaScript program that calculates the
//factorial of a given number using a for loop.

fact = 1;
for (i = 1; i <= num; i++) {
  fact = fact * i;
}
console.log("Factorial of given number is ", fact);

//Write JavaScript code that prints numbers from 10 to 1 in reverse order.

for (i = 10; i >= 1; i--) {
  console.log(i);
}

//Print the Alphabet

console.log("Capital Letters");

for (i = 65; i <= 90; i++) {
  console.log(String.fromCharCode(i));
}
console.log("Smaller letters");

for (i = 97; i <= 122; i++) {
  console.log(String.fromCharCode(i));
}
