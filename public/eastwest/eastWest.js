import getQuoteFromKanye from './getKanyeQuote.js';

// display the quote
// create buttons for east
// create button for west

//STRETCH
// if correct kanye is picked reward points
// if wrong knaye is picked reset score
// create leaderboard

async function onRender() {
  await getQuoteFromKanye()
    .then(res => {
      quoteObject = res;
      quote.textContent = res.text;
    });
}

onRender();

let streakCount = 0;
let quoteObject;

const buttonWest = document.getElementById('west');
const buttonEast = document.getElementById('east');
const quote = document.getElementById('quote');
const attribution = document.getElementById('attribution');
const nextQuote = document.getElementById('next-quote');
const streakDisplay = document.getElementById('streak');

function makeGuess(kanye) {
  attribution.textContent = quoteObject.source;

  //change class on correct answer side to make bigger/clear/highlight
  if(quoteObject.source === 'West') {
    buttonWest.classList.add('correct');
    buttonEast.classList.add('wrong');
  }
  if(quoteObject.source === 'East') {
    buttonEast.classList.add('correct');
    buttonWest.classList.add('wrong');
  }
  //diable buttonWest and buttonEast
  if(quoteObject.source === kanye) {
    streakCount++; 
  } else {
    streakCount = 0;
  }
  streakDisplay.textContent = streakCount;
  nextQuote.classList.remove('hidden');
  //
}

async function getNextQuote() {
  attribution.textContent = '____';
  buttonWest.classList.remove('correct');
  buttonEast.classList.remove('correct');
  buttonWest.classList.remove('wrong');
  buttonEast.classList.remove('wrong');
  nextQuote.classList.add('hidden');
  await getQuoteFromKanye()
    .then(res => {
      console.log(res);
      quoteObject = res;
      quote.textContent = res.text;
    });
}

buttonWest.addEventListener('click', () => {
  makeGuess('West');
});

buttonEast.addEventListener('click', () => {
  makeGuess('East');
});

nextQuote.addEventListener('click', () => {
  getNextQuote();
});
