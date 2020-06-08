function aditya() {
  // Get the checkbox
  var a = document.getElementById("raj");

  // Get the output text
  var b = document.getElementById("god");

  // If the checkbox is checked, display the output text
 if (a.checked == true) {
    b.style.background = "white";
  } else {
    b.style.background = "black";
  }
}
