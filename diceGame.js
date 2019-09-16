document.getElementById('myId').innerHTML="Dice Game";

//DiceCritCahllenge
let totalScore = 0;

function playDiceCRITChallenge(){
  d4();
  d6();
  d8();
  d10();
  d20();
  console.log("Your Score is" + " " + totalScore);
}

function diceRoll(side){
  result = Math.floor(Math.random()*side) + 1;
  parseInt(result);
  console.log(result);
  return result;
}


function d4(){
  let crit = false;
  let score = 0;
  while (!crit) {
    let result = diceRoll(4);
    if (result !== 4) {
      score = score + result;
    }
    else{
      crit = true;
      console.log(" " + score);
      totalScore = totalScore + score;
      return score;
    }
  }

}


function d6(){
  let crit = false;
  let score = 0;
  while (!crit) {
    let result = diceRoll(6);
    if (result !== 6) {
      score = score + result;
    }
    else{
      crit = true;
      console.log(" " + score);
      totalScore = totalScore + score;
      return score;
    }
  }
}


function d8(){
  let crit = false;
  let score = 0;
  while (!crit) {
    let result = diceRoll(8);
    if (result !== 8) {
      score = score + result;
    }
    else{
      crit = true;
      console.log(" " + score);
      totalScore = totalScore + score;
      return score;
    }
  }
}


function d10(){
  let crit = false;
  let score = 0;
  while (!crit) {
    let result = diceRoll(10);
    if (result !== 10) {
      score = score + result;
    }
    else{
      crit = true;
      console.log(" " + score);
      totalScore = totalScore + score;
      return score;
    }
  }
}


function d20(){
  let crit = false;
  let score = 0;
  while (!crit) {
    let result = diceRoll(20);
    if (result !== 20) {
      score = score + result;
    }
    else{
      crit = true;
      console.log(" " + score);
      totalScore = totalScore + score;
      return score;
    }
  }
}

playDiceCRITChallenge();
