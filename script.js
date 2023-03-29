const gameboard = document.querySelector(".gameboard");
const squares = Array.from(document.querySelectorAll(".square"));

const gameboardd = (() => {
  const gameboardarray = [];
  
  for (let i in squares) {
    gameboardarray[i] = squares[i].innerText;
  }
  console.log(gameboardarray);
})();


