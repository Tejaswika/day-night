function aditya() {
  // Get the checkbox
  var a = document.getElementById("raj");

  // Get the output text
  var b = document.getElementById("god");

  // If the checkbox is checked, display the output text
 if (a.checked == true) {
    b.style.backgroundImage = "url(https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/sunrise-quotes-21-1586892331.jpg)";
  } else {
    b.style.backgroundImage = "url(https://images.unsplash.com/photo-1518818419601-72c8673f5852?ixlib=rb-1.2.1&w=1000&q=80)";;
  }
}
