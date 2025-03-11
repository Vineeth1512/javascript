let form = document.forms[0];

console.log(form);

form.addEventListener("submit", function (e) {
  e.preventDefault();

  console.log(e.target[0].value);
  console.log(e.target[1].value);
  let match = document.getElementById("match");
  let unmatch = document.getElementById("unmatch");
  if (e.target[0].value == e.target[1].value) {
    match.style.display = "block";
    match.style.color = "green";
    unmatch.style.display = "none";

    console.log("Password is matched");
  } else {
    unmatch.style.display = "block";
    unmatch.style.color = "red";
    match.style.display = "none";
    console.log("Password does not match");
  }

  e.target[0].value = "";
  e.target[1].value = "";
});
