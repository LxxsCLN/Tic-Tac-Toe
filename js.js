const game = document.querySelector(".gameboard");
const squares = Array.from(document.querySelectorAll(".square"));
const text = document.querySelector(".text");
const restart = document.querySelector(".restart");
const submit = document.querySelector(".submit");
const playeroneinput = document.querySelector("#playerone");
const playertwoinput = document.querySelector(".playertwo");
const welcome = document.querySelector("h1")
const labels = document.querySelectorAll(".label")

const gameboard = (() => {
  let gameboardarray = ["", "", "", "", "", "", "", "", ""];

  const updateScreen = () => {
    for (const i in squares) {
      squares[i].innerText = gameboardarray[i];
    }
    changePlayer();
    whoWon();
    
  };

  const click = (() => squares.forEach((square) => {
    square.addEventListener("click", () => {
      if (square.innerText !== "") return;
      gameboardarray[square.dataset.value] = currentPlayer.symbol;
      updateScreen();
    });
  }))();

  const checkWinner = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  const whoWon = () => {
    let y = 0;
    for (let a = 0; a < 8; a++) {
      let x = "";

      for (let b = 0; b < 3; b++) {
        x += gameboardarray[checkWinner[a][b]];
      }
      if (x === "XXX" || x === "OOO") {
        changePlayer();
        text.innerText = `${currentPlayer.name} WINS!`;
        stopGame();
      }
    }
    for (let x = 0; x < 9; x++) {
      if (squares[x].innerText !== "") {
        y++;
      }
    }
    if (y === 9) {
      text.innerText = "It's a TIE";
      stopGame();
    }
  };

  const stopGame = () => {
    squares.forEach((s) => {s.classList.add("nonclick")});
    restart.innerText = "Play Again!"
  };

  const changePlayer = () => {
    if (currentPlayer === playerOne) {
      currentPlayer = playerTwo;
    } else if (currentPlayer === playerTwo) {
      currentPlayer = playerOne;
    }
    text.innerText = `It is ${currentPlayer.name}'s turn`;
  };

  const restartGame = (() => {
    restart.addEventListener("click", () => {
      gameboardarray = ["", "", "", "", "", "", "", "", ""];
      updateScreen();
      currentPlayer = playerOne;
      squares.forEach((s) => {s.classList.remove("nonclick")});
      text.innerText = `It is ${currentPlayer.name}'s turn`;
      restart.innerText = "Restart"
    });
  })();
})();



const Player = (name, symbol) => {
    return { name, symbol }
}

let playerOne = Player("Player One", "X");
let playerTwo = Player("Player Two", "O");

let currentPlayer = playerOne;



submit.addEventListener("click", (e) => {
  
  if (playeroneinput.value === "" || playertwoinput.value === "") return;
    
    playerOne.name = playeroneinput.value;
    playerTwo.name = playertwoinput.value;
    playeroneinput.value =""
    playertwoinput.value =""
    restart.classList.remove("hidden")
    game.classList.remove("hidden")
    welcome.classList.add("hidden")
    text.innerText = `It is ${currentPlayer.name}'s turn`;
    e.preventDefault();
    welcome.classList.add("hidden")
    labels.forEach((l) => { l.classList.add("hidden")})
    submit.classList.add("hidden")
});
