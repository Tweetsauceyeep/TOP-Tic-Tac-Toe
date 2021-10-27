# tasks:
## References
- https://www.youtube.com/watch?v=B3pmT7Cpi24&t=190s


#### completed (10 - 24 - 21 => 10 - 25 - 21)
1.find a way to render the gameboard [done]
- gave each div an id. [done]
- find a way so that when you click a specific div. 
it pushes the symbol to the specific index in an array [done]
- basically if u click div id: 9. you insert the element in index 9 [done]


2. find a way to change the value of the div thingy use 
some event handler to push a new value to a specific index[done]

3. Turn based system: once 'x' is placed. place 'O' [done]
- used helper functions.
    -validateCurrentPlayer = check if certain vals are true and returns current player if true
    -currentPlayerSwitcher = if playerOne.getPlayerTurn val is true, make it false and the playerTwo val true

4. Implement some func to make it so you cant edit a tile 
if it already has something in it

5. implement a func to check for a winner
