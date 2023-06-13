// build structure 
// App
// Board 
// Info 
/* In App there are these elements: 
  1. pop-up: shrinks when game is on-going and there is no winner 
  2. Board 
  3. Info 

  Pseudocode: 
  - states: reset, winner 
  - resetboard function: set reset to true 
*/
/* In Board there are these elements: 
  1. props: reset, setReset, winner, setWinner 
  2. turn: set turn to 0 or 1 
  3. data: array of 9 holding empty data 
  4. array of cells (we have 9 cells) 
  5. draw function: each time we click on a cell, the data array gets updated 
  6. useeffect: check if there is a winner, or a tie 
  7. useEffect: based on winner, state >>> reset game 

*/