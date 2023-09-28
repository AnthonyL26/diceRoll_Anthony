function getRandomInt() {
    return Math.floor(Math.random() * 6) +1;
  }

  function rollDice() {
    const dice1 = document.getElementById("1");
    const dice2 = document.getElementById("2");
    var num1 = getRandomInt();
    var num2 = getRandomInt();
    dice1.innerHTML = num1;
    dice2.innerHTML = num2;


}


const button = document.querySelector("button");
button.addEventListener("click", rollDice);

