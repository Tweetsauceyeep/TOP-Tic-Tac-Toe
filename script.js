
const newPlayer = (getSymbol, getName, getPlayerTurn) => {
  return { getSymbol, getName, getPlayerTurn }
}



const playerOne = newPlayer('X', 'playerOne', true)
const playerTwo = newPlayer('O', 'playerTwo', false)
// homie use capital letter O 
// module pattern to keep gameboard out of global scope
const GameModule = (function () {
  let GameBoardObj = {
    gameboard: [" ", " ", " ", " ", " ", " ", " ", " ", " "],// use arr to hold gameboard
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
console.log(GameModule.GameBoardObj.winningConditions)
// =====================================FUNCTIONS==============================================
// this dont work homo
function handleResultValidation() {
  let board = GameModule.GameBoardObj.gameboard
  let roundWon = false 
  for (let i = 0; i <= 7; i++){
    const winCondition = GameModule.GameBoardObj.winningConditions
    const a = board[winCondition[0]];
    const b = board[winCondition[1]];
    const c = board[winCondition[2]];
    if (a === " " || b === " " || c === " ") {
      continue 
    } 
    if (a === b && b === c){
      roundWon = true
      break;
    }
  }
}



const isValidAction = (tile) =>{// tests wether a tile has something in it. returns false if not
  if (tile.innerText === 'X' || tile.innerText === 'O') {
    return false
  } 
  return true
}

function validateCurrentPlayer(){
  let currentPlayer;
  if (playerOne.getPlayerTurn === true){
    currentPlayer = playerOne.getSymbol
  } else {
    currentPlayer = playerTwo.getSymbol    }
    return currentPlayer
  }
  
  function currentPlayerSwitcher(){
    let playerOneTurn = playerOne.getPlayerTurn
    if(playerOneTurn === true){
      playerOne.getPlayerTurn = false;
      playerTwo.getPlayerTurn = true;
    } else if (playerOneTurn === false){
      playerOne.getPlayerTurn = true;
      playerTwo.getPlayerTurn = false;
    }
  }


// iterate over array and create divs.
function gameDisplayController() {
  let board = GameModule.GameBoardObj.gameboard
  const gameBoardContainer = document.querySelector('#gameboard')

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

  let boardTile = document.querySelectorAll('.boardtile')


  
  function reRenderBoard(index,currentPlayer) {//  check if array has empty. if empty run update board func 
  let boardTile = document.querySelectorAll('.boardtile')
  boardTile[index].textContent = currentPlayer
  }

  function updateBoard(index, currentPlayer) {
    gameboardArray[index] = currentPlayer //TODO:replace w/ current player var
  }

  // iterate over boardtile class and add an event listener to each element
  for (let i = 0; i < boardTile.length; i++) {
    boardTile[i].addEventListener('click', () => { //TODO: updates both board array and dom.
      //create a function to iterate over the arr and
      // if index in arr is empty re render that part only.
      isValidAction(boardTile[i]) 
      if(isValidAction(boardTile[i]) === true){
      
        updateBoard(boardTile[i].id, validateCurrentPlayer())
        reRenderBoard(boardTile[i].id, validateCurrentPlayer())
        console.log(gameboardArray)
        currentPlayerSwitcher()
      } else {return}
    })
  }


}

gameDisplayController()
markGameboard()
