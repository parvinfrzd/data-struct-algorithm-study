const suits = ["Spades", "Diamonds", "Club", "Heart"];
const values = [
  "Ace",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "Jack",
  "Queen",
  "King",
];

let deck = []; 

var makeDeck = function (suits, values) {
  let deck = []; 
  for(let i = 0; i < suits.length; i++) {
    for(let j = 0; j < values.length; j++) {
      let card = { Value: values[j], Suit: suits[i]}; 
      deck.push(card);
    }
  }
  return deck; 
}

var shuffleDeck = function (deck) {
  for(let i = 0; i < deck.length; i++) {
    let j = Math.floor(Math.random() * i); 
    let temp = deck[j]; 
    deck[j] = deck[i]; 
    deck[i] = temp; 
  }
}

var stackShuffle = function (deck) {
  let count = deck.length; 
  while(count) {
    deck.push(deck.splice(Math.floor(Math.random() * count), 1)[0]); 
    count --;
  }
}

var riffleShuffle = function (deck) {
  /*
  1. Split the deck approximately in half
  2. One half in the left hand, the other half in the right hand
  3. Riffle the edges of both sets so they intermingle
  4. Push the cards together
  5. Repeat the process for 6 more times
  */

  let cutDeckPoint = deck.length / 2 + Math.floor(Math.random() * 9) - 4; 
  let leftHalf = deck.splice(0, cutDeckPoint); 
  let leftCount = leftHalf.length; 
  let rightCount = deck.length - Math.floor(Math.random() * 4); 

  while(leftCount) {
    let takeAmount = Math.floor(Math.random() * 4); 
    deck.splice(rightCount, 0, ...leftHalf.splice(leftCount, takeAmount)); 
    leftCount -= takeAmount; 
    rightCount = rightCount - Math.floor(Math.random() * 4) + takeAmount; 
  }
  deck.splice(rightCount, 0, ...leftHalf);
}


