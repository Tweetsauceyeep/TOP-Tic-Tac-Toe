

/*
const jimmie = Player('jim', 10);
const badGuy = Player('jeff', 5);
jimmie.attack(badGuy);
*/
// player factory function
const newPlayer = (symbol, name) => {
  const getSymbol = () => symbol;
  const getName = () => name;
  const getPlayerTurn = true

  return { getSymbol, getName, getPlayerTurn }
}

const jimmie = newPlayer('X', 'jimmie')
console.log(jimmie.getSymbol(), jimmie.getName()) //note to make the method a func when you call it or it dont worky

// module pattern to keep gameboard out of global scope
const GameModule = (function () {
  let GameBoardObj = {
    gameboard: ["X", "O", "X", "O", "X", "O", "X", "O", "X"] // use array to hold gameboard

  }


  return {
    GameBoardObj
  }
})()


function gameDisplayController() {
  let board = GameModule.GameBoardObj.gameboard
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


function markGameboard() { // click stuff and change value on gameboard 
  const gameboardArray = GameModule.GameBoardObj.gameboard
  console.log(`gmbrdarr.length = ${gameboardArray.length}`) // show if i got the right thing
  console.log(gameboardArray)
  let boardTile = document.querySelectorAll('.boardtile')
  
  // function to add elements to a specific index in an arr.
  function insertAt(array, start, insElement) {
    array.splice(start, 0, insElement)
  }

  // iterate over boardtile class and add an event listener to each element
  for (let i = 0; i < boardTile.length; i++) {
    boardTile[i].addEventListener('click', () => {
      console.log(`Tile id: ${boardTile[i].id} player Symbol: ${jimmie.getSymbol()}`)
      insertAt(gameboardArray, boardTile[i].id, 'x')
    })
  }


}


gameDisplayController()
markGameboard()