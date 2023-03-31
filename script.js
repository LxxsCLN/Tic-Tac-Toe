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
  winCond: [ // The win conditions
        [0, 1, 2],
        [0, 3, 6],
        [0, 4, 8],
        [1, 4, 7],
        [2, 4, 6],
        [2, 5, 8],
        [3, 4, 5],
        [6, 7, 8]
    ]
  whoWon(x);
}

function whoWon(x){
  if (x === "XXX") {
    console.log("PLAYER ONE WINS")
    console.log(x)
    stopGame();
  }
  if (x === "OOO") {
    console.log("PLAYER TWO WINS")
    console.log(x)
    stopGame();
  }
  x = "";
}

function stopGame(){
  squares.innerText = "";
}


