document.getElementById('myId').innerHTML="Dice Game";

//DiceCritCahllenge

function diceRoll(side){
  result = Math.floor(Math.random()*side) + 1;
  //console.log(result);
  return result;
}

function d4(){
  let d4Results = [];
  let crit = false;
  let score = 0;
  while (!crit) {
    let result = diceRoll(4);
    d4Results.push(result);
    if (result !== 4) {
      score = score + result;
    }
    else{
      crit = true;
      d4Results.push(score);
      console.log(d4Results);
      console.log(" " + score);
      return d4Results;
    }
  }
}

function d6(){
  let d6Results = [];
  let crit = false;
  let score = 0;
  while (!crit) {
    let result = diceRoll(6);
    d6Results.push(result);
    if (result !== 6) {
      score = score + result;
    }
    else{
      crit = true;
      d6Results.push(score);
      console.log(d6Results);
      console.log(" " + score);
      return d6Results;
    }
  }
}

function d8(){
  let d8Results = [];
  let crit = false;
  let score = 0;
  while (!crit) {
    let result = diceRoll(8);
    d8Results.push(result);
    if (result !== 8) {
      score = score + result;
    }
    else{
      crit = true;
      d8Results.push(score);
      console.log(d8Results);
      console.log(" " + score);
      return d8Results;
    }
  }
}

function d10(){
  let d10Results = [];
  let crit = false;
  let score = 0;
  while (!crit) {
    let result = diceRoll(10);
    d10Results.push(result);
    if (result !== 10) {
      score = score + result;
    }
    else{
      crit = true;
      d10Results.push(score);
      console.log(d10Results);
      console.log(" " + score);
      return d10Results;
    }
  }
}

function d12(){
  let d12Results = [];
  let crit = false;
  let score = 0;
  while (!crit) {
    let result = diceRoll(12);
    d12Results.push(result);
    if (result !== 12) {
      score = score + result;
    }
    else{
      crit = true;
      d12Results.push(score);
      console.log(d12Results);
      console.log(" " + score);
      return d12Results;
    }
  }
}

function d20(){
  let d20Results = [];
  let crit = false;
  let score = 0;
  while (!crit) {
    let result = diceRoll(20);
    d20Results.push(result);
    if (result !== 20) {
      score = score + result;
    }
    else{
      crit = true;
      d20Results.push(score);
      console.log(d20Results);
      console.log(" " + score);
      return d20Results;
    }
  }
}

function playDiceCRITChallenge(){
  let scores = [];
  let totalScores = [];
  let finalScore = 0;
  scores[0] = d4();
  scores[1] = d6();
  scores[2] = d8();
  scores[3] = d10();
  scores[4] = d12();
  scores[5] = d20();
  console.log(scores);

  // poping out the total score from each dice
    for (let i = 0; i < scores.length; i++) {
      totalScores.push(scores[i][scores[i].length - 1]);
    }

  // doubling the previous score if natural 1 was hit
  for (let i = 1; i < scores.length; i++) {
    if (scores[i][0] == 1) {
      finalScore += totalScores[i - 1];
    }
  }

// skipping the score of the next dice if natural crit was hit
  for (let i = 0; i < totalScores.length; i++) {
    if (totalScores[i] == 0 && totalScores[i + 1]) {
      i++;
    }
    else {
      finalScore += totalScores[i];
    }
  }

  // logging the total scores in an array
  for(let i = 0; i < scores.length; i++){
    console.log(scores[i]);

  }

  console.log(totalScores);
  console.log("Your final Score is" + " " + finalScore);
}

playDiceCRITChallenge();
