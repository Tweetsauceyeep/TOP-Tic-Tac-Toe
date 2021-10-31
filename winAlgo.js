let board = ['X', 'X', 'X', 'O', 'X', 'O', 'X', 'O', ' X'];
let currentPlayer = 'X';
    winningConditions: [
      //TODO: use this to validate wheter someone has won or not
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ],
 
/*
function checkWinner() {
  for (let i = 0; i < gameboard.length; i++) {
    if (gameboard[i] === ' ' || currentPlayer) {
      return
      //console.log('return')
    }

    if (gameboard[i] === currentPlayer){
       
    }
  }
}
*/

function handleResultValidation() {
  let roundWon = false;
  for (let i = 0; i <= 7; i++) {
    const winCondition = winningConditions[i];
    const a = board[winCondition[0]];
    const b = board[winCondition[1]];
    const c = board[winCondition[2]];
    if (a === '' || b === '' || c === '') {
      continue;
    }
    if (a === b && b === c) {
      roundWon = true;
        console.log(roundWon)
      break;
    }
  }
}
//checkWinner()
handleResultValidation()
