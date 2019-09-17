document.getElementById('myId').innerHTML="Dice Crit Challenge";

//DiceCritCahllenge

function playDiceCRITChallenge(){
  let scores = [];
  let totalScores = [];
  let finalScore = 0;
  scores[0] = rollDice(4);
  scores[1] = rollDice(6);
  scores[2] = rollDice(8);
  scores[3] = rollDice(10);
  scores[4] = rollDice(12);
  scores[5] = rollDice(20);

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
  console.log("Your dice Totals are" + " " + totalScores);
  console.log("Your final Score is" + " " + finalScore);

  return finalScore;
}
function diceRoller(side){
  result = Math.floor(Math.random()*side) + 1;
  //console.log(result);
  return result;
}

function rollDice(highestNumber){
  let d4Results = [];
  let crit = false;
  let score = 0;
  while (!crit) {
    let result = diceRoller(highestNumber);
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

function playerOne(){
  let playerOneScore = playDiceCRITChallenge();
  console.log(playerOneScore);
  let showScore = document.getElementById("playeroneScore");
  document.getElementById('playerOneScore').innerHTML=" Player 1 scored a" + " " + playerOneScore;
}
function playerTwo(){
  let playerTwoScore = playDiceCRITChallenge();
  console.log(playerTwoScore);
  let showScore = document.getElementById("playerTwoScore");
  document.getElementById('playerTwoScore').innerHTML=" Player 2 scored a" + " " + playerTwoScore;
}
function playerThree(){
  let playerThreeScore = playDiceCRITChallenge();
  console.log(playerThreeScore);
  let showScore = document.getElementById("playerThreeScore");
  document.getElementById('playerThreeScore').innerHTML=" Player 3 scored a" + " " + playerThreeScore;

}
function playerFour(){
  let playerFourScore = playDiceCRITChallenge();
  console.log(playerFourScore);
  let showScore = document.getElementById("playerFourScore");
  document.getElementById('playerFourScore').innerHTML=" Player 4 scored a" + " " + playerFourScore;
}
