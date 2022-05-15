// define variables
var timerEl = document.getElementById("countdown");
var timePenaltyEl = document.getElementById("time-penalty");
var questionOneAns = document.getElementById("1.1")

// function for countdown timer
function countdown() {
  var timeLeft = 10;
  // create a countdown interal to performa a (function , every x miliseconds)
  var timeInterval = setInterval(function () {
    if (timeLeft > 1) {
      timerEl.textContent = timeLeft + " seconds remaining";
      timeLeft--;
    } else if (timeLeft === 1) {
      timerEl.textContent = timeLeft + " second remaining";
      timeLeft--;
    } else {
      timerEl.textContent = "GAME OVER";
      clearInterval(timeInterval);
      // ** ADD SOMETHING TO CLEAR QUESTIONS/SHOW FINAL SCORE WITH PENALTY
    }
  }, 1000);
  console.log(">>> begin countdown >>>");
}
// end countdown timer

// function for time penalty
function timePenalty() {
  var penaltyLeft = 5;
  var penaltyInterval = setInterval(function () {
    if (penaltyLeft > 0) {
      timePenaltyEl.textContent = penaltyLeft;
      penaltyLeft--;
    } else {
      clearInterval(penaltyInterval);
    }
  }, 1000);
  // ** ADD TBD - at the end of the time penalty, should move to next question; this will probably be in a for loop? not here
}
// end time penalty

// function for correct answer pause
function correctAnsPause() {
  setTimeout(function() {
    $(".correct-answer").addClass("d-none")
  }, 2000);
};
// end correct answer pause

// start game on click, begin countdown, display question 1
$("#get-started").on("click", "#start-button", function () {
  var startGame = $(this);
  $("#get-started").addClass("d-none");
  console.log(">>> start button clicked >>>");
  // callback countdown timer
  countdown();
  // display question 1
  $("#question-1").removeClass("d-none");
});
// end start game button functionality

// question 1 correct
questionOneAns.onclick = function() {
  console.log(">>> 1.1 clicked, CORRECT! >>>")
  $(".incorrect-answer").removeClass("d-none")
  correctAnsPause();
  console.log(">>> pause complete >>>")
};

// question 1 incorrect
$("#question-1").on("click", ".multiple-choice-list", function () {
  console.log(">>> multiple-choice-list clicked >>>");
});

// end question 1

// start check for correctness
// on click within class="multiple-choice-list"
// if button class="correct-answer"
// display feedback-correct
// wait 0.5 second
// else
// display feedback-incorrect
// timepenalty(); to countodwn the 5-second penalty
// next question
//end check for correctness

// loop through the quesions
// start with question 1 - whatever
// if button clicked, correctness();
// loop through questions
// end loop through the questions

// score display
// after the questions loop, display their score
// enter name to save
// send to local storage: name + timeLeft or score
// end score display
