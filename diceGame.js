document.getElementById('myId').innerHTML="Dice Game";

//DICE GAME
function diceRoll(side){
  result = Math.floor(Math.random()*side) + 1;
  return result;
}

let diceResult = diceSelector()
console.log("Your rolled a " + diceResult + " sided die and scored a " +  diceRoll(diceResult));

function diceSelector(){
  let isValid = false;
  let size = "";
  while (!isValid) {
    size = prompt("Please enter the dice you would like to roll.");
    if (size == "2") {
      alert("Please enter a number greater than 2.");
    }
    else if (size % 2 !== 0) {
      alert("Please enter an even number.");
    }
    else {
      isValid = true;
      return size;
    }
  }
}
