
const result = document.querySelector("#resultText");

const rockButton = document.getElementById("B1");
const paperButton = document.getElementById("B2");
const scissorsButton = document.getElementById("B3");
const button = document.getElementById(".button");

button.addEventListener("click", function(){
alert ("button clicked");
});

button.addEventListener("click", function(){0
    alert ("Rock");
});


function getComputerChoice(){
      const compChoiceArr = ["Rock","Paper","Scissors"];
  let random = Math.floor(Math.random()*3);
  return compChoiceArr[random];
  }
  
  function playRound(playerSelection, computerSelection) {
      let winner = "";
        if(playerSelection === computerSelection){
          winner = "Its a tie";
        } else if(playerSelection==="Rock" && computerSelection==="Paper") {
          winner = "You lose";
        } else if(playerSelection==="Rock" && computerSelection==="Scissors"){
          winner = "You Win";
        } else if(playerSelection==="Paper" && computerSelection==="Scissors"){
          winner = "You lose";
        } else if(playerSelection==="Paper" && computerSelection==="Rock"){
          winner = "You Win";
        } else if(playerSelection==="Scissors" && computerSelection==="Rock"){
          winner = "You lose";
        } else if(playerSelection==="Scissors" && computerSelection==="Paper"){
          winner = "You win";
        }
        return winner;
      }
      
      
      const playerSelection = "Rock";
      const computerSelection = getComputerChoice();
      
      console.log(playerSelection);
      console.log(computerSelection);
      result.textContent = playRound(playerSelection, computerSelection);
   