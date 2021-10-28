// player factory function
const newPlayer = (getSymbol, getName, getPlayerTurn) => {
  return { getSymbol, getName, getPlayerTurn }
}

const playerOne = newPlayer('X', 'playerOne', true)
const playerTwo = newPlayer('O', 'playerTwo', false)

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
let testFunc = () => {
  currentPlayerSwitcher()
  console.log(validateCurrentPlayer())
}

//playerTwo.getPlayerTurn = false 
//playerOne.getPlayerTurn = true 
//console.log(:q
validatePlayer()
testFunc()
testFunc()
testFunc()
testFunc()

