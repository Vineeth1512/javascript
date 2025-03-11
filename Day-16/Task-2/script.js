let passwordTypes = ["Strong", "Medium", "Weak"];

let input1 = document.getElementById("password");
let match = document.getElementById("match");

let btn = document.getElementsByTagName("button")[0];

if (input1 && match && btn) {
  btn.addEventListener("click", function (e) {
    e.preventDefault();
    let password = input1.value;
    if (password == "") {
      alert("please enter a passeword");
      return;
    }

    if (password.length <= 3) {
      match.innerText = passwordTypes[2];
    } else if (password.length <= 5) {
      match.innerText = passwordTypes[1];
    } else {
      match.innerText = passwordTypes[0];
    }
  });
} else {
  console.error("Password input or match element not found.");
}
