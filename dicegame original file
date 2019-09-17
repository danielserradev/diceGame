document.getElementById('myId').innerHTML="Dice Crit Challenge";

//DiceCritCahllenge

function playDiceCRITChallenge(){
  let scores = [];
  let totalScores = [];
  let finalScore = 0;
  scores[0] = d(4);
  scores[1] = d(6);
  scores[2] = d(8);
  scores[3] = d(10);
  scores[4] = d(12);
  scores[5] = d(20);

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
  console.log(totalScores);
  console.log("Your final Score is" + " " + finalScore);

  let showScore = document.getElementById("finalScore");
  document.getElementById('myId').innerHTML=" You scored a" + " " + finalScore;
}
function diceRoll(side){
  result = Math.floor(Math.random()*side) + 1;
  //console.log(result);
  return result;
}

function d(highestNumber){
  let d4Results = [];
  let crit = false;
  let score = 0;
  while (!crit) {
    let result = diceRoll(highestNumber);
    d4Results.push(result);
    if (result !== highestNumber) {
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
