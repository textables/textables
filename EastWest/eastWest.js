import getQuoteFromKanye from './getKanyeQuote.js';

// display the quote
// create buttons for east
// create button for west
// if correct kanye is picked reward points
// if wrong knaye is picked reset score
// create leaderboard

function makeGuess(kanye) {
  attribution.value = quoteObject.source;
  if(quoteObject.source === kanye) {
    streakCount++; 
  } else {
    streakCount = 0;
  }
  console.log('streak count:' + streakCount + kanye);
}

let streakCount = 0;
const westButton = document.getElementById('west');
const eastButton = document.getElementById('east');

let quoteObject = getQuoteFromKanye();
const quote = document.getElementById('quote');
const attribution = document.getElementById('attribution');
quote.value = quoteObject.text;

westButton.addEventListener('click', () => {
  makeGuess('West');
});

eastButton.addEventListener('click', () => {
  makeGuess('East');
});
