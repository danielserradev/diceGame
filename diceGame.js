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
  let diceArray = [4, 6, 8, 10, 20];
  let totalScore = 0;
  scores[0] = d4();
  scores[1] = d6();
  scores[2] = d8();
  scores[3] = d10();
  scores[4] = d20();

  for (let i = 0; i < scores.length; i++) {
    if (scores[i] == 0) {
      i++;
    }
    else if(i !== 0 && scores[i] === 1) {
      scores[i-1] = diceRoll(diceArray[i-1]);
    }
    else {
      totalScore += scores[i];
    }
  }


  console.log("Your seperate scores are" + " " + scores);
  console.log("Your total score is" + " " + totalScore);
}

playDiceCRITChallenge();
