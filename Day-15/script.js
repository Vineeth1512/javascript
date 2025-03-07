let containerDivElement = document.createElement("div");
containerDivElement.classList.add("contianer");

let imageContent = document.createElement("img");
let imgArray = [
  "https://www.w3schools.com/w3images/house4.jpg",
  "https://www.w3schools.com/w3images/house5.jpg",
  "https://www.w3schools.com/w3images/house5.jpg",
  "https://www.w3schools.com/w3images/house3.jpg",
];

imageContent.setAttribute(
  "src",
  "https://www.w3schools.com/w3images/house3.jpg"
);
containerDivElement.append(imageContent);
count = 0;
function changeImage() {
  console.log("Click function");

  if (count == imgArray.length) {
    count = 0;
  }
  imageContent.setAttribute("src", imgArray[count]);
  containerDivElement.append(imageContent);
  count++;
  console.log(count);
}

let btnOne = document.createElement("button");
btnOne.innerText = "click 1";

btnOne.addEventListener("click", changeImage);
let btnTwo = document.createElement("button");
btnTwo.innerText = "click 2";
btnTwo.addEventListener("click", changeImage);

let btnThree = document.createElement("button");
btnThree.innerText = "click 3";
btnThree.addEventListener("click", changeImage);

let btnFour = document.createElement("button");
btnFour.innerText = "click 4";
btnFour.addEventListener("click", changeImage);
document.body.append(containerDivElement, btnOne, btnTwo, btnThree, btnFour);
