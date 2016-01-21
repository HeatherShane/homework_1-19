var playerOne;
var playerTwo;
var playerOneScore = 0;
var playerTwoScore = 0;

while (playerOneScore < 3 || playerTwoScore < 3) {
  playerOne = parseInt(Math.random()*10%3);

  if (playerOne == 0) {
	playerOne = "rock";
} else if (playerOne == 1) {
	playerOne  = "paper";
} else {
	playerOne  = "scissors";
  }

console.log("contestant 1 played" + playerOne + "!");

playerTwo = parseInt(Math.random()*10%3);
if (playerTwo == 0) {
playerTwo = "rock";
} else if (playerTwo == 1) {
playerTwo  = "paper";
} else {
playerTwo  = "scissors";
}

console.log("contestant 2 played" + playerTwo + "!");
# rock over scissors
# paper over rock
# scissors over paper


if (playerOne === playerTwo) {
  console.log("it's a tie");
}

else if (playerOne === "rock" && playerTwo === "scissors") {
  playerOneScore = playerOneScore + 1
  console.log("Player one has won " + playerOneScore + " rounds and player two has won " + playerTwoScore + " rounds" );

}

else if (playerOne === "rock" && playerTwo === "paper") {
  playerTwoScore = playerTwoScore + 1
  console.log("Player one has won" + playerOneScore + " rounds and player two has won " + playerTwoScore + " rounds");
}

else if (playerOne === "paper" && playerTwo === "rock") {
  playerOneScore = playerOneScore + 1
  console.log("Player one has won " + playerOneScore + " rounds and player two has won " + playerTwoScore + " rounds" );
}



else if (playerOne === "paper" && playerTwo === "scissors") {
  playerTwoScore = playerTwoScore + 1
  console.log("Player one has won" + playerOneScore + " rounds and player two has won " + playerTwoScore+ " rounds");
}

else if (playerOne === "scissors" && playerTwo === "paper") {
  playerOneScore = playerOneScore + 1
  console.log("Player one has won " + playerOneScore + " rounds and player two has won " + playerTwoScore + " rounds" );

}

else if (playerOne === "scissors" && playerTwo === "rock") {
  playerTwoScore = playerTwoScore + 1
  console.log("Player one has won" + playerOneScore + " rounds and player two has won " + playerTwoScore+ " rounds");
}

if (playerOneScore === 3) {
  console.log("player one wins!");
}

else (playerTwoScore === 3){
  console.log("player two wins!");
}
