

/*
const jimmie = Player('jim', 10);
const badGuy = Player('jeff', 5);
jimmie.attack(badGuy);
*/

const newPlayer = (symbol, name) => {
  const getSymbol = () => symbol;
  const getName = () => name;
  const getPlayerTurn = true

  return { getSymbol, getName, getPlayerTurn}
}

const jimmie = newPlayer('X', 'jimmie')
console.log(jimmie.getSymbol(), jimmie.getName()) //note to make the method a func when you call it or it dont worky

const GameModule = (function () {
  let GameBoard = {
    gameboard: ["X", "O", "X", "O", "X", "O", "X", "O", "X"] // use array to hold gameboard

  }


  return {
    GameBoard
  }
})()


function gameDisplayController() {
  let board = GameModule.GameBoard.gameboard
  const gameBoardContainer = document.querySelector('#gameboard')
  console.log(GameModule.gameboard)

  for (let i = 0; i < board.length; i++) {
    let moveDiv = document.createElement('div')
    moveDiv.textContent = board[i]
    moveDiv.id = i
    moveDiv.classList.add('boardtile')
    gameBoardContainer.appendChild(moveDiv)
  }
}
function markGameboard(){
  let boardTile = document.getElementsByClassName('boardtile') 
  function logId() {
    console.log(boardTile.id)
  }
  boardTile.addEventListener('click', logId)

}

//markGameboard()
gameDisplayController()