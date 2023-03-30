const gameboard = document.querySelector(".gameboard");
const squares = Array.from(document.querySelectorAll(".square"));
let gameboardarray = ["1","1","1","1","1","1","1","1","1"];
const text = document.querySelector(".text");

const gameboardd = (() => {

  const update = () => { for (let i in squares){
    if (squares[i].innerText !==  undefined){
    gameboardarray[i] = squares[i].innerText;
  }}
  checkWinner();
  
  };

  const click = (() => squares.forEach((s) => {
      s.addEventListener("click", () => {

      if (s.innerText !== "") return;

      s.innerText = currentPlayer.symbol;

      update();

      if (currentPlayer === playerOne){
        currentPlayer = playerTwo;
      }
      else if (currentPlayer === playerTwo){
        currentPlayer = playerOne;
      }
      text.innerText = `It is ${currentPlayer.name}'s turn`
    })
  }))();

})();

const Player = (name, symbol) => {
  return {name, symbol}
};

const playerOne = Player("Player One", "X");
const playerTwo = Player("Player Two", "O");
let currentPlayer = playerOne;
text.innerText = `It is ${currentPlayer.name}'s turn`;


function checkWinner(){
  let x = "";
  for (let i = 0; i < 3; i++){
    
    x += gameboardarray[i];
    
  }
  whoWon(x);
  for (let i = 3; i < 6; i++){
    
    x += gameboardarray[i];
    
  }
  whoWon(x);
  for (let i = 6; i < 9; i++){
    
    x += gameboardarray[i];
    // doesnt work
  }
  whoWon(x);
}

function whoWon(x){
  if (x === "XXX") {
    console.log("PLAYER ONE WINS")
    stopGame();
  }
  if (x === "OOO") {
    console.log("PLAYER TWO WINS")
    stopGame();
  }
  x = "";
}

function stopGame(){
  squares.innerText = "";
}