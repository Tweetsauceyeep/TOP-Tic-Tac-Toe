let gameboard = ['X', 'X', 'X', 'O', 'X', 'O', 'X', 'O', ' X'];

function checkWinner() {
  let counter;
  for (let i = 0; i < gameboard.length; i++) {
    if (gameboard[i] === 'X'){
      counter++
      console.log(counter)
    }
  }
}

checkWinner()
