$(document).ready(function() {
  function truee() {
    document.getElementsByClassName("q1").innerHTML = "Corect Answer!";
    console.log(truee);
  }

  function falsee() {
    document.getElementsByClassName("q1").innerHTML = "Wrong Answer!";
  }

  var correct = 0;
  var incorrect = 0;

  $("#correct").text(correct);
  $("#incorrect").text(incorrect);

  setTimeout(function() {}, 3000);

  // display the timer within Timer ID:
  document.getElementById("timer").innerHTML;

  // add if/else statements for the booelean variables

  // add scoreboard and increment them

  // display timer to 5 minutes
});
