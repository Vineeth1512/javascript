let header = document.createElement("header");

let firstNav = document.createElement("nav");
firstNav.innerHTML = `<a href="#"><span>BR</span>Architects</a>`;
let secondNamv = document.createElement("nav");
secondNamv.innerHTML = `  <a href="#">Projects</a><a href="#">About</a><a href="#">Contact</a> `;

header.append(firstNav, secondNamv);

//-------------------------------------------------

let backgroundImg = document.createElement("div");
backgroundImg.classList.add("headeing-container");

let backImg = document.createElement("img");
backImg.setAttribute("id", "back-Img");

backImg.setAttribute("src", "https://www.w3schools.com/w3images/architect.jpg");
let brH2NameElement = document.createElement("h2");
brH2NameElement.innerHTML = `<span id="br-name">BR</span>Architects`;
brH2NameElement.setAttribute("id", "head");
backgroundImg.append(backImg, brH2NameElement);

//---------------------------------------------------

let cardsWrapper = document.createElement("div");

cardsWrapper.classList.add("cards-wrapper");

let projectTitle = document.createElement("h1");
projectTitle.setAttribute("id", "projects");
projectTitle.innerText = "Projects";
let hrElement = document.createElement("hr");

let imgWrapper = document.createElement("div");
imgWrapper.setAttribute("id", "image-wrapper");

let imageNames = [
  "Brick House",
  "Barne House",
  "Renovated",
  "Barne House",
  "Renovated",
  "Summer House",
  "Summer House",
  "Barne House",
];
let imagesArray = [
  "https://www.w3schools.com/w3images/house4.jpg",
  "https://www.w3schools.com/w3images/house3.jpg",
  "https://www.w3schools.com/w3images/house2.jpg",
  "https://www.w3schools.com/w3images/house2.jpg",
  "https://www.w3schools.com/w3images/house5.jpg",
  "https://www.w3schools.com/w3images/house4.jpg",
  "https://www.w3schools.com/w3images/house3.jpg",
  "https://www.w3schools.com/w3images/house5.jpg",
];
for (i = 0; i <= 7; i++) {
  let imgContent = document.createElement("div");
  imgContent.classList.add("image-wrap");

  let iTitle = document.createElement("p");
  iTitle.classList.add("title-name");
  iTitle.innerText = imageNames[i];

  let cardImage = document.createElement("img");

  cardImage.setAttribute("src", imagesArray[i]);

  imgContent.append(iTitle, cardImage);
  console.log(imgContent);

  imgWrapper.append(imgContent);

  console.log(imgWrapper);
}

cardsWrapper.append(projectTitle, hrElement, imgWrapper);

document.body.append(header, backgroundImg, cardsWrapper);
//------------------------------------------------------------------------


