let bodyElement = document.getElementsByTagName("body")[0];

bodyElement.style.fontFamily = " Times New Roman, Times, serif";
bodyElement.style.backgroundColor = "black";
bodyElement.style.color = "#fff";

let doubleWrap = document.getElementById("double-wrap");
doubleWrap.style.maxWidth = "900px";
doubleWrap.style.margin = "30px auto";
doubleWrap.style.boxShadow = "1px 1px 20px #012290f7";

let wrapper = document.getElementById("wrapper");
wrapper.style.padding = " 50px 10px";

let userName = document.getElementsByClassName("heading")[0];

userName.style.color = "gold";
userName.style.fontSize = "16px";

let paraElement = document.getElementById("paragraph-1");

paraElement.style.color = "red";

let subTitleElement = document.querySelectorAll(".para");
subTitleElement.forEach((element) => {
  element.style.color = " purple";
});

let allParagraphElement = document.querySelectorAll("p");

allParagraphElement.forEach((e) => {
  e.style.fontSize = "12px";
  e.style.marginTop = "0px";
  e.style.marginBottom = "2px";
  e.style.color = "yellow";
});

let boldElement = document.querySelectorAll("b");

boldElement.forEach((e1) => {
  e1.style.fontSize = "14px";
});

let personalinfoElement = document.getElementById("personal-information");
console.log(personalinfoElement);
if (personalinfoElement) {
  console.log(personalinfoElement);

  personalinfoElement.style.display = "flex";
  personalinfoElement.style.flexDirection = "column";
  personalinfoElement.style.alignItems = "center";
  personalinfoElement.style.justifyContent = "center";
}
let roleElement = document.querySelectorAll(".role");

console.log(roleElement);
roleElement.forEach((e) => {
  e.style.display = " flex";
  e.style.justifyContent = "space-between";
});

let lineElement = document.querySelectorAll(".line");

lineElement.forEach((e) => {
  e.style.border = "1px solid #fff";
});

let profileSummaryElement = document.getElementById("profile-summary");
profileSummaryElement.style.margin = " 10px 0";

ulElement = document.querySelectorAll("ul");

ulElement.forEach((e) => {
  e.style.margin = "0";
  e.style.marginBottom = "8px";
});

let hyperLinkElement = document.querySelectorAll(".hyper-link");

hyperLinkElement.forEach((e) => {
  e.style.color = "blue";
});
