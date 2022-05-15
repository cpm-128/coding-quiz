// define variables
var timerEl = document.getElementById('countdown');
var timeLeft = 100;
var timePenalty = 5;
var currentQuestionIndex = 0;
var questionsObj = [
  {
    question: "Commonly used data types do NOT incldue:" ,
      answers: ["strings" , "booleans" , "alerts" , "numbers"],
      correct: "alerts"
  },
  {
    question: "The condition in an if/else statement is enclposed with ____________." ,
      answers: ["quotes" , "curly brackets" , "parenthesis" , "square brackets"],
      correct: "parenthesis"
  },
  {
    question: "Arrays in JavaScript can be used to store ____________." ,
      answers: ["numbers and strings" , "other arrays" , "booleans" , "all of the above"],
      correct: "all of the above"
  },
  {
    question: "String values must be enclosed within ____________ when being assigned to variables." ,
      answers: ["commas" , "curly brackets" , "quotes" , "parenthesis"],
      correct: "quotes"
  },
  {
    question: "A very useful tool used during development and debugging for printing content to the debugger is:" ,
      answers: ["JavaScript" , "terminal/bash" , "for loops" , "console.log"],
      correct: "console.log"
  },
];
//correct answers: questionsObj[0].correct
// logic to display questions, logic with event listens if/else based on correct or incorrect


// function for countdown timer
function countdown() {
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
  $(".question").text(questionsObj[currentQuestionIndex].question);
    $("#button1").text(questionsObj[currentQuestionIndex].answers[0]);
    $("#button2").text(questionsObj[currentQuestionIndex].answers[1]);
    $("#button3").text(questionsObj[currentQuestionIndex].answers[2]);
    $("#button4").text(questionsObj[currentQuestionIndex].answers[3]);
};
// end function to loop through quiz

// start saveScore
function saveScore() {
  $("#quiz").addClass("d-none")
  console.log(">>> save score>>>" , timeLeft)
};
// end saveScore

// **questions are pretty hard coded in their own functions. struggling with a loop bc of need event listeners to move on

// start questionFive
function questionFive() {
  currentQuestionIndex = 4;
  console.log(">>> Question Index >>>" , currentQuestionIndex);
  quizPlay();
  //vwhere do they click?
  $(".multiple-choice-list").on("click" , "#button1" , function() {
    console.log(">>> incorrect >>>") ,
    timeLeft -= timePenalty;
    saveScore();
  });
  $(".multiple-choice-list").on("click" , "#button2" , function() {
    console.log(">>> incorrect >>>")
    timeLeft -= timePenalty;
    saveScore();
  })
  $(".multiple-choice-list").on("click" , "#button3" , function() {
    console.log(">>> incorrect >>>")
    timeLeft -= timePenalty;
    saveScore();
  })
  $(".multiple-choice-list").on("click" , "#button4" , function() {
    console.log(">>> correct >>>")
    saveScore();
  })
};
// end questionFive

// start questionFour
function questionFour() {
  currentQuestionIndex = 3;
  console.log(">>> Question Index >>>" , currentQuestionIndex);
  quizPlay();
  //vwhere do they click?
  $(".multiple-choice-list").on("click" , "#button1" , function() {
    console.log(">>> incorrect >>>") ,
    timeLeft -= timePenalty;
    questionFive();
  });
  $(".multiple-choice-list").on("click" , "#button2" , function() {
    console.log(">>> incorrect >>>")
    timeLeft -= timePenalty;
    questionFive();
  })
  $(".multiple-choice-list").on("click" , "#button3" , function() {
    console.log(">>> correct >>>")
    questionFive();
  })
  $(".multiple-choice-list").on("click" , "#button4" , function() {
    console.log(">>> incorrect >>>")
    timeLeft -= timePenalty;
    questionFive();
  })};
// end questionFour

// start questionThree
function questionThree() {
  currentQuestionIndex = 2;
  console.log(">>> Question Index >>>" , currentQuestionIndex);
  quizPlay();
  //vwhere do they click?
  $(".multiple-choice-list").on("click" , "#button1" , function() {
    console.log(">>> incorrect >>>") ,
    timeLeft -= timePenalty;
    questionFour();
  });
  $(".multiple-choice-list").on("click" , "#button2" , function() {
    console.log(">>> incorrect >>>")
    timeLeft -= timePenalty;
    questionFour();
  });
  $(".multiple-choice-list").on("click" , "#button3" , function() {
    console.log(">>> incorrect >>>")
    timeLeft -= timePenalty;
    questionFour();
  });
  $(".multiple-choice-list").on("click" , "#button4" , function() {
    console.log(">>> correct >>>")
    questionFour();
  });
};
// end questionThree

// start questionTwo
function questionTwo() {
  currentQuestionIndex = 1;
  console.log(">>> Question Index >>>" , currentQuestionIndex);
  quizPlay();
  //vwhere do they click?
  $(".multiple-choice-list").on("click" , "#button1" , function() {
    console.log(">>> incorrect >>>") ,
    timeLeft -= timePenalty;
    questionThree();
  });
  $(".multiple-choice-list").on("click" , "#button2" , function() {
    console.log(">>> incorrect >>>")
    timeLeft -= timePenalty;
    questionThree();
  });
  $(".multiple-choice-list").on("click" , "#button3" , function() {
    console.log(">>> correct >>>")
    questionThree();
  });
  $(".multiple-choice-list").on("click" , "#button4" , function() {
    console.log(">>> incorrect >>>")
    timeLeft -= timePenalty;
    questionThree();
  });
};
// end questionTwo

// start questionOne
function questionOne() {
  console.log(">>> Question Index >>>" , currentQuestionIndex);
  quizPlay();
  //vwhere do they click?
  $(".multiple-choice-list").on("click" , "#button1" , function() {
    console.log(">>> incorrect >>>") ,
    timeLeft -= timePenalty;
    questionTwo();
  });
  $(".multiple-choice-list").on("click" , "#button2" , function() {
    console.log(">>> incorrect >>>")
    timeLeft -= timePenalty;
    questionTwo();
  })
  $(".multiple-choice-list").on("click" , "#button3" , function() {
    console.log(">>> correct >>>")
    questionTwo();
  })
  $(".multiple-choice-list").on("click" , "#button4" , function() {
    console.log(">>> incorrect >>>")
    timeLeft -= timePenalty;
    questionTwo();
  })
};
// end questionOne

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
    questionOne();
  });
// end start game button functionality