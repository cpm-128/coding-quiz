// define variables
var timerEl = document.getElementById('countdown');

// on page load
// add classes to hide the questions
// end on page load

// function for countdown timer
function countdown() {
    var timeLeft = 10;
    // create a countdown interal to performa a (function , every x miliseconds)
    var timeInterval = setInterval(function () {
        if (timeLeft > 1) {
        timerEl.textContent = timeLeft + ' seconds remaining';
        timeLeft--;
        } else if (timeLeft === 1) {
        timerEl.textContent = timeLeft + ' second remaining';
        timeLeft--;
        } else {
        timerEl.textContent = 'GAME OVER';
        clearInterval(timeInterval);
        // ** ADD SOMETHING TO CLEAR QUESTIONS/SHOW FINAL SCORE WITH PENALTY
          }
        }, 1000);
    console.log(">>> begin countdown >>>")
}
// end countdown timer

// start game on click, begin countdown
$("#get-started").on("click" , "#start-button" , function() {
    var startGame = $(this)
      $("#get-started").addClass("d-none")
      console.log(">>> start button clicked >>>")
    // callback countdown timer
    countdown();
  });
// end start game button functionality


var container = document.querySelector(".container");

container.addEventListener("click", function(event) {
    // this will track where the click actually happens within the container
    var element = event.target;

    if (element.matches("#start-button")) {
        // make it hidden

        // make question-1 visible

        // all the text in the html doc will have to be stored in data sets
    }
});

