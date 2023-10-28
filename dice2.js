const dice1 = document.getElementById("dice1");
const dice2 = document.getElementById("dice2");
 const rollButton = document.getElementById("roll-button");
const scoreDisplay = document.getElementById("score");

function rollDice() {
    const value1 = Math.floor(Math.random() * 6) + 1;
     const value2 = Math.floor(Math.random() * 6) + 1;
 
 dice1.style.backgroundPositionX = (value1 - 1) * -100 + "px";
 dice2.style.backgroundPositionX = (value2 - 1) * -100 + "px";

    const totalScore = value1 + value2;
    scoreDisplay.textContent = "Total Score: " + totalScore;}

     rollButton.addEventListener("click", rollDice);
