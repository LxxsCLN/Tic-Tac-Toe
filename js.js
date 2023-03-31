const game = document.querySelector(".gameboard");
const squares = Array.from(document.querySelectorAll(".square"));

const text = document.querySelector(".text");
const text2 = document.querySelector(".text2");
const restart = document.querySelector(".restart");





const gameboard = (() => {
    let gameboardarray = ["","","","","","","","",""];
    const updateScreen = () => {
        for (let i in squares){
            squares[i].innerText = gameboardarray[i];
        }  
        whoWon();
        changePlayer();
    };

    const click = (() => squares.forEach((square) => {
        square.addEventListener("click", () => {
  
        if (square.innerText !== "") return;
  
        gameboardarray[square.dataset.value] = currentPlayer.symbol;
            
        

        updateScreen();

        
  
        
      })
    }))();

    const checkWinner = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
    ]

    const whoWon = () => {
        
        for (let a = 0; a < 8; a++){
            let x = "";
            
            for (let b = 0; b < 3; b++){
                x += gameboardarray[checkWinner[a][b]]    
            }
            if (x === "XXX" || x === "OOO"){
                text2.innerText = `${currentPlayer.name} WINS`;
                stopGame()
            }            
        }
        
    }

    const stopGame = () => {
        game.classList.add("nonclick")
    }

    const changePlayer = () => {
        if (currentPlayer === playerOne){
            currentPlayer = playerTwo;
          }
          else if (currentPlayer === playerTwo){
            currentPlayer = playerOne;
          }
          text.innerText = `It is ${currentPlayer.name}'s turn`
        if (game.classList.contains("nonclick")){
            text.innerText = "";
        }
    }

    const restartGame = (() => {
        restart.addEventListener("click", () => {
            gameboardarray = ["","","","","","","","",""];
            updateScreen();
            currentPlayer = playerOne;
            game.classList.remove("nonclick")
            text2.innerText ="";
            text.innerText = `It is ${currentPlayer.name}'s turn`
        })      
        })();

})();


const Player = (name, symbol) => {
    return {name, symbol}
  };



const playerOne = Player("Player One", "X");
const playerTwo = Player("Player Two", "O");
let currentPlayer = playerOne;
text.innerText = `It is ${currentPlayer.name}'s turn`;

