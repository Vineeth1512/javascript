let input1 = document.getElementById("inp1");
let input2 = document.getElementById("inp2");
let result = document.getElementById("result");
let addBtn = document.getElementById("add-btn");
let subBtn = document.getElementById("sub-btn");
let multiBtn = document.getElementById("multi-btn");
let divBtn = document.getElementById("div-btn");

addBtn.addEventListener("click", function (e) {
  e.preventDefault();
  if (input1.value == "" || input2.value == "") {
    alert("please enter values");
    return;
  }
  let outResult = Number(input1.value) + Number(input2.value);
  result.innerText = `sum of two numbers is ${input1.value} + ${input2.value} = ${outResult}`;
  result.style.display = "block";
  input1.value = "";
  input2.value = "";
  console.log(outResult);
});

subBtn.addEventListener("click", function (e) {
  e.preventDefault();
  if (input1.value == "" || input2.value == "") {
    alert("please enter values");
    return;
  }

  let outResult = Number(input1.value) - Number(input2.value);
  result.innerText = `Subtract of two numbers is ${input1.value} - ${input2.value} = ${outResult}`;
  result.style.display = "block";
  input1.value = "";
  input2.value = "";
});

multiBtn.addEventListener("click", function (e) {
  e.preventDefault();
  if (input1.value == "" || input2.value == "") {
    alert("please enter values");
    return;
  }

  let outResult = Number(input1.value) * Number(input2.value);
  result.innerText = `Multifly of two numbers is ${input1.value} * ${input2.value} = ${outResult}`;
  result.style.display = "block";
  input1.value = "";
  input2.value = "";
});

divBtn.addEventListener("click", function (e) {
  e.preventDefault();
  if (input1.value == "" || input2.value == "") {
    alert("please enter values");
    return;
  }
  if (Number(input2.value) === 0) {
    alert("Cannot divide by zero");
    return;
  }
  let outResult = Number(input1.value) / Number(input2.value);
  result.innerText = `Division is ${input1.value} / ${input2.value} = ${outResult}`;
  result.style.display = "block";
  input1.value = "";
  input2.value = "";
});
