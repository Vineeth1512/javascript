function html(a) {
  console.log("learning html");
  a(js);
}

function css(b) {
  console.log("learning css");
  b();
}

function js() {
  console.log("learning js");
}

html(css);
