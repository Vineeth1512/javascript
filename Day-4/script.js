let day = prompt("Enter the day").toLowerCase();

switch (day) {
  case "Monday":
    console.log("Start your week strong!");
    break;

  case "tuesday":
    console.log("Keep going!");
    break;

  case "wednesday":
    console.log("Halfway there!");
    break;

  case "thursday":
    console.log("Almost the weekend!");
    break;

  case "friday":
    console.log("Happy Friday!");
    break;

  case "saturday":
  case "sunday":
    console.log("Enjoy your weekend!");
    break;

  default:
    console.log("Invalid Day");
}

let color = prompt("Enter color").toLowerCase();

switch (color) {
  case "red":
    console.log("Stop");
    break;

  case "yellow":
    console.log("Get Ready!");
    break;

  case "green":
    console.log("Go!");
    break;

  default:
    console.log("Invalid color");
}

let price = +prompt("Enter your price");

if (price >= 200) {
  console.log("Discount is : " + price * (15 / 100));
} else if (price >= 100) {
  console.log("Discount is : " + price * (10 / 100));
} else if (price >= 50) {
  console.log("Discount is : " + price * (5 / 100));
} else {
  console.log("No discount");
}

let dish = prompt("Enter your dish").toLowerCase();

switch (dish) {
  case "biryani":
    console.log("Biryani price is 150");
    break;

  case "shawarma":
    console.log("shawarma price is 100");
    break;
  case "fried rice":
    console.log("fried rice price is 80");
    break;
  case "veg pulav":
    console.log("veg pulav price is 180");
    break;
  default:
    console.log("Invalid Input");
}
