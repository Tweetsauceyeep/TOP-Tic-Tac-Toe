

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

const playerOne = newPlayer('X', 'jimmie')

// module pattern to keep gameboard out of global scope
const GameModule = (function () {
  let GameBoardObj = {
    gameboard: ["X", "O", "X", "O", "X", "O", "X", " ", "X"] // use array to hold gameboard

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
/*function reRenderBoard(){
  const gameboardArray = GameModule.GameBoardObj.gameboard
  let boardTile = document.querySelectorAll('.boardtile')

  for (let i = 0; i < gameboardArray.length; i++){
    if (gameboardArray[i] === " " ){
      
    
    } else {
      return
    }
  }
}
*/

function markGameboard() { // click stuff and change value on gameboard 
  const gameboardArray = GameModule.GameBoardObj.gameboard
  
  let boardTile = document.querySelectorAll('.boardtile')

  // function to add elements to a specific index in an arr.
  function updateBoard(index) {
    gameboardArray[index] = "X"
  }
  // iterate over boardtile class and add an event listener to each element
  for (let i = 0; i < boardTile.length; i++) {
    boardTile[i].addEventListener('click', () => {
       //create a function to iterate over the arr and
      // if index in arr is empty re render that part only.
      updateBoard(boardTile[i].id) 
      console.log(gameboardArray)

    })
  }


}


gameDisplayController()
markGameboard()