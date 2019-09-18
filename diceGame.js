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
  let playerName = prompt("What is your name player one?");
  document.getElementById("playerOneButton").innerHTML = playerName;
  let playerOneScore = playDiceCRITChallenge();
  console.log(playerOneScore);
  let showScore = document.getElementById("playeroneScore");
  let p1score = document.getElementById('playerOneScore');
  p1score.innerHTML=playerName + " scored a " + " " + playerOneScore;
  p1score.style = "display: inline-block;";
  let player = {Name: playerName, Score: playerOneScore};
  return player;
}
function playerTwo(){
  let playerName = prompt("What is your name player two?");
  document.getElementById("playerTwoButton").innerHTML = playerName;
  let playerTwoScore = playDiceCRITChallenge();
  console.log(playerTwoScore);
  let showScore = document.getElementById("playerTwoScore");
  let p2score = document.getElementById('playerTwoScore');
  p2score.innerHTML=playerName + " scored a " + playerTwoScore;
  p2score.style = "display: inline-block;";
  let player = {Name: playerName, Score: playerTwoScore};
  return player;
}
function playerThree(){
  let playerName = prompt("What is your name player three?");
  document.getElementById("playerThreeButton").innerHTML = playerName;
  let playerThreeScore = playDiceCRITChallenge();
  console.log(playerThreeScore);
  let showScore = document.getElementById("playerThreeScore");
  let p3score = document.getElementById('playerThreeScore');
  p3score.innerHTML=playerName + " scored a " + playerThreeScore;
  p3score.style = "display: inline-block;";
  let player = {Name: playerName, Score: playerThreeScore};
  return player;
}
function playerFour(){
  let playerName = prompt("What is your name player four?");
  document.getElementById("playerFourButton").innerHTML = playerName;
  let playerFourScore = playDiceCRITChallenge();
  console.log(playerFourScore);
  let showScore = document.getElementById("playerFourScore");
  let p4score = document.getElementById('playerFourScore');
  p4score.innerHTML=playerName + " scored a " + playerFourScore;
  p4score.style = "display: inline-block;";
  let player = {Name: playerName, Score: playerFourScore};
  return player;
}
function getWinner(){
  let players = [];
  let player1 = playerOne();
  let player2 = playerTwo();
  let player3 = playerThree();
  let player4 = playerFour();

  players[0] = player1;
  players[1] = player2;
  players[2] = player3;
  players[3] = player4;

  let lowest = players[0].Score;
  let wWCD = players[0].Name;
  for (let i = 0; i < players.length; i++) {
    console.log(players[i].Score);
    if (players[i].Score < lowest) {
      lowest = players[i].Score;
      wWCD = players[i].Name;
    }
  }
let showScore = document.getElementById("getWinnersScore");
let winner = document.getElementById('getWinner');
winner.innerHTML=wWCD + " wins with the lowest score of" + " " + lowest;
winner.style = "display: inline-block;";

}
