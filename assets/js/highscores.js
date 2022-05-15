// start retrieveScores
function retrieveScores() {
      var getHighScores = JSON.parse(localStorage.getItem("highScores"));
      for (i = 0; i < getHighScores.length; i++) {
        var scoreListItem = document.createElement("li");
        scoreListItem.textContent = getHighScores[i].name + ": " + getHighScores[i].score;
        $("#highscores-list").append(scoreListItem);
      };
  };
  // end retrieveScores

  retrieveScores();