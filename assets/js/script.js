// define variables
var timerEl = document.getElementById('countdown');
var questionsObj = [
  {
    question1: "Commonly used data types do NOT incldue:" ,
      answers: ["strings" , "booleans" , "alerts" , "numbers"],
      correct: "alerts"
  },
  {
    question2: "The condition in an if/else statement is enclposed with ____________." ,
      answers: ["quotes" , "curly brackets" , "parenthesis" , "square brackets"],
      correct: "parenthesis"
  },
  {
    question3: "Arrays in JavaScript can be used to store ____________." ,
      answers: ["numbers and strings" , "other arrays" , "booleans" , "all of the above"],
      correct: "all of the above"
  },
  {
    question4: "String values must be enclosed within ____________ when being assigned to variables." ,
      answers: ["commas" , "curly brackets" , "quotes" , "parenthesis"],
      correct: "quotes"
  },
  {
    question5: "A very useful tool used during development and debugging for printing content to the debugger is:" ,
      answers: ["JavaScript" , "terminal/bash" , "for loops" , "console.log"],
      correct: "console.log"
  },
];
//correct answers: questionsObj[0].correct
// logic to display questions, logic with event listens if/else based on correct or incorrect


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
};
// end countdown timer

// function to loop through quiz
function quizPlay() {
  console.log("questionsObj[0].question1");
};
// end function to loop through quiz

// start game on click, begin countdown, display question 1
$("#get-started").on("click" , "#start-button" , function() {
    var startGame = $(this)
      $("#get-started").addClass("d-none")
      console.log(">>> start button clicked >>>")
    // callback countdown timer
    countdown();
    // display row that contains quiz formatting
    $("#quiz").removeClass("d-none")
    // display questions
    quizPlay();
  });
// end start game button functionality