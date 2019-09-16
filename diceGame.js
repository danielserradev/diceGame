document.getElementById('myId').innerHTML="Dice Game";

//DiceCritCahllenge

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
      return score;
    }
  }
}

function playDiceCRITChallenge(){
  let scores = [];
  let totalScore = 0;
  scores[0] = d4();
  scores[1] = d6();
  scores[2] = d8();
  scores[3] = d10();
  scores[4] = d20();

  if (scores[0] !== 0) {
    totalScore = scores[0] + scores[1];
    console.log(totalScore);
  }
  else {
    totalScore = totalScore + scores[1];
    console.log(totalScore);
  }
  if (scores[1] !== 0) {
    totalScore = totalScore + scores[2];
    console.log(totalScore);
  }
  

  console.log(scores);
  console.log("Your score is" + " " + totalScore);
}

playDiceCRITChallenge();
