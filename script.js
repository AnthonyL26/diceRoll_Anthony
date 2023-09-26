function getRandomInt() {
    return Math.floor(Math.random() * 6);
  }

var dice1 = document.getElementsByName("1");
var dice2 = document.getElementsByName("2");

const button = document.querySelector("button");
button.addEventListener("click", rollDice);

function rollDice() {
    
    var num1 = getRandomInt();
    var num2 = getRandomInt();
    dice1.src = "Dice " +  `${num1}` + ".jpg";
    dice2.src = "Dice " +  `${num2}` + ".jpg";
}