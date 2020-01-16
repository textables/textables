import getQuoteFromKanye from './getKanyeQuote.js';

// display the quote
// create buttons for east
// create button for west

//STRETCH
// if correct kanye is picked reward points
// if wrong knaye is picked reset score
// create leaderboard

let streakCount = 0;
let quoteObject;

const westButton = document.getElementById('west');
const eastButton = document.getElementById('east');
const quote = document.getElementById('quote');
const attribution = document.getElementById('attribution');
const nextQuote = document.getElementById('next-quote');

function makeGuess(kanye) {
  attribution.textContent = quoteObject.source;
  //change class on correct answer side to make bigger/clear/highlight
  //diable westButton and eastButton
  if(quoteObject.source === kanye) {
    streakCount++; 
  } else {
    streakCount = 0;
  }
  console.log('streak count:' + streakCount + kanye);
  //display hidden next quote button
  //
}

async function test() {
  await getQuoteFromKanye()
    .then(quoteObject => {
      console.log(quoteObject);
      quote.textContent = quoteObject.text;
    });
}

westButton.addEventListener('click', () => {
  makeGuess('West');
});

eastButton.addEventListener('click', () => {
  makeGuess('East');
});

nextQuote.addEventListener('click', () => {
  test();
});
