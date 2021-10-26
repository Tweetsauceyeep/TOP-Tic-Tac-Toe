

/*
const jimmie = Player('jim', 10);
const badGuy = Player('jeff', 5);
jimmie.attack(badGuy);
*/
// player factory function
const newPlayer = (symbol, name, playerTurn) => {
  const getSymbol = () => symbol;
  const getName = () => name;
  const getPlayerTurn = () => playerTurn;

  return { getSymbol, getName, getPlayerTurn }
}

const playerOne = newPlayer('X', 'playerOne', true)
const playerTwo = newPlayer('O', 'playerTwo', false)
// homie use capital letter O 
// module pattern to keep gameboard out of global scope
const GameModule = (function () {
  let GameBoardObj = {
    gameboard: [" ", " ", " ", " ", " ", " ", " ", " ", " "],// use array to hold gameboard
    /*
    [
      [0,1,2], visual representation of board.
      [3,4,5],
      [6,7,8]
    ] 
    */

    winningConditions: [ //TODO: use this to validate wheter someone has won or not
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],

    ]
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
function reRenderBoard(index) { //TODO: Fix this: check if array has empty. if empty run update board func 
  const gameboardArray = GameModule.GameBoardObj.gameboard
  let boardTile = document.querySelectorAll('.boardtile')
  boardTile[index].textContent = playerOne.getSymbol()    

}

function markGameboard() { // click stuff and change value on gameboard  
  const gameboardArray = GameModule.GameBoardObj.gameboard

  let boardTile = document.querySelectorAll('.boardtile')

  //TODO: function to add elements to a specific index in an arr. [works]
  function updateBoard(index) {
    gameboardArray[index] = "X"
  }
  // iterate over boardtile class and add an event listener to each element
  for (let i = 0; i < boardTile.length; i++) {
    boardTile[i].addEventListener('click', () => {
      //create a function to iterate over the arr and
      // if index in arr is empty re render that part only.
      updateBoard(boardTile[i].id)
      reRenderBoard(boardTile[i].id)
      console.log(gameboardArray)

    })
  }


}


gameDisplayController()
markGameboard()