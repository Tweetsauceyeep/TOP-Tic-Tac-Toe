console.log('hello world')


const GameModule = (function () {
    let gameboard = [ // Try putting an array in array to hold gameboard
        ['o', 'x', 'x'],
        ['x', 'o', 'o'],
        ['x', 'o', 'x']
    ]

    return {
        gameboard
    }
})()


function renderGameboard() {
    const gameBoardContainer = document.querySelector('#gameboard')
    for (let i = 0; i < GameModule.gameboard.length; i++) {
        for (let j = i; j < GameModule.gameboard.length; j++) {
            let moveDiv = document.createElement('div')
            moveDiv.textContent = GameModule.gameBoard[i][j]
            gameBoardContainer.appendChild(moveDiv)
        }
    }
}

renderGameboard()








