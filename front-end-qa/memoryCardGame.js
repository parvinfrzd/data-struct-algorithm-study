/*
RULES: 
  1.  We need a shuffled set of cards. There must be a pair of each card in our deck.


  2.  The game must flip the cards clicked by the player. Maximum of two cards will show at a time.


  3.  The game will handle matched and unmatched cards. 
      Unmatched cards are flipped back after a short duration. 
      Matched cards are removed from the deck.


  4.  Every time a player selects a pair, the game will increment the current move count


  5.  Once all pairs are found out, players sees a confirmation dialog with the score.


  6.  Game provides a functionality to restart.
*/


/*
  MAKE A CARD: 
      We first define our card structure. 
      For a card we create an object with the type attribute and an image source.

  SHUFFLE: 
      will use Fisher-Yates shuffle algorithm for shuffling an array of cards but we can use any algorithm or code that gives us a randomized array.

  RENDER BOARD DECK OF CARDS 

  FLIP CARDS, EVALUATE MATCH, AND COUNT MOVES 
      openCards to track the cards that have been flipped by the player
      clearedCards to track the cards that have matched and need to be removed from the deck
      moves to keep track of the moves made by the player.

  CHECK FOR GAME COMPLETION 
      Every time we evaluate for a match, we check if all pairs have been found. 
      If yes, we show the player a completion modal.
*/