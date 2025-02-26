// 1. print numbers from 1-10 and 10-1 without using < or > operators

for (i = 1; i != 11; i++) {
  console.log(i);
}

for (a = 10; a != 0; a--) {
  console.log(a);
}

// 2. print the sum of number upto 20
sum = 0;
for (i = 1; i <= 20; i++) {
  sum += i;
}

console.log("Sum of upto 20 numbers is :", sum);

//  3.print the sum of even numbers upto 50

for (i = 1; i < 50; i++) {
  if (i % 2 == 0) {
    console.log(i);
  }
}
