function showPopup() {
    var popup = document.getElementById("popup");
    popup.style.display = "block";
  }
  
  function play(userChoice) {
    var computerChoice = Math.random();
  
    if (computerChoice < 0.34) {
      computerChoice = "rock";
    } else if (computerChoice <= 0.67) {
      computerChoice = "paper";
    } else {
      computerChoice = "scissors";
    }
  
    var result;
  
    if (userChoice == computerChoice) {
      result = "Tie!";
    } else if (userChoice == "rock") {
      if (computerChoice == "scissors") {
        result = "You win!";
      } else {
        result = "Computer wins!";
      }
    } else if (userChoice == "paper") {
      if (computerChoice == "rock") {
        result = "You win!";
      } else {
        result = "Computer wins!";
      }
    } else if (userChoice == "scissors") {
      if (computerChoice == "paper") {
        result = "You win!";
      } else {
        result = "Computer wins!";
      }
    }
  
    var message = "You chose " + userChoice + ", computer chose " + computerChoice + ". " + result;
  
    alert(message);
  
    var popup = document.getElementById("popup");
    popup.style.display = "none";
  }
  