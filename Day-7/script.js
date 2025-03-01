//reverse a string input : hello  ,output : olleh

let str = "hello";
let reversed = "";
for (let i = str.length - 1; i >= 0; i--) {
  reversed += str.charAt(i);
}
console.log(reversed);

for (i in str) {
  console.log(i);
}

console.log("After for of loop");

for (i of str) {
  console.log(i);
}

// find a even numbers in an array - [23,54,67,64,46,95,98]
array = [23, 54, 67, 64, 46, 95, 98];

for (i in array) {
  if (array[i] % 2 == 0) {
    console.log(array[i]);
  }
}

// let a = {
//   name: "vineeth",
//   age: 33,
// };

// for (i in a) {
//   console.log(a[i]);
// }

//  sum of a given number str="258309"

let num = 1234567;

let str1 = String(num);
sum = 0;
for (i in str1) {
  sum += Number(str1[i]);
}
console.log(sum);

//find a max in a given number str="258309"
let given_number = "6258319";

max_digit = given_number[0];
max_index = 0;
for (i in given_number) {
  if (max_digit < given_number[i]) {
    max_digit = given_number[i];
    max_index = i;
  }
}
console.log("Max digit is ", max_digit);
console.log("Max index is ", max_index);
