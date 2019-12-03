var btn = document.getElementById("myButton");

btn.addEventListener("click", myFunction);

function myFunction(){
  document.getElementById("myText").innerHTML = "Hooray! You've clicked the button.";
  document.getElementById("myButton").style.backgroundColor = "#8e44ad";
};
