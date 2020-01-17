import getQuoteFromKanye from './getKanyeQuote.js';

let streakCount = 0;
let quoteObject;
let toggle = true;

const buttonWest = document.getElementById('west');
const buttonEast = document.getElementById('east');
const quote = document.getElementById('quote');
const attribution = document.getElementById('attribution');
const nextQuote = document.getElementById('next-quote');
const streakDisplay = document.getElementById('streak');

async function onRender() {
  await getQuoteFromKanye()
    .then(res => {
      quoteObject = res;
      quote.textContent = res.text;
    });
}

onRender();

function makeGuess(kanye) {
  attribution.textContent = quoteObject.source;

  toggle = false;
  buttonWest.classList.remove('normal');
  buttonEast.classList.remove('normal');

  if(quoteObject.source === 'West') {
    buttonWest.classList.add('correct');
    buttonEast.classList.add('wrong');
  } else if(quoteObject.source === 'East') {
    buttonEast.classList.add('correct');
    buttonWest.classList.add('wrong');
  }
  if(quoteObject.source === kanye) {
    streakCount++;
  } else {
    streakCount = 0;
  }
  streakDisplay.textContent = streakCount;
  nextQuote.classList.remove('hidden');
}

async function getNextQuote() {
  toggle = true;
  attribution.textContent = '____';
  nextQuote.classList.add('hidden');

  buttonWest.classList.remove('correct');
  buttonEast.classList.remove('correct');
  buttonWest.classList.remove('wrong');
  buttonEast.classList.remove('wrong');
  buttonWest.classList.add('normal');
  buttonEast.classList.add('normal');


  await getQuoteFromKanye()
    .then(res => {
      quoteObject = res;
      quote.textContent = res.text;
    });
}

buttonWest.addEventListener('click', () => {
  if(toggle) {
    makeGuess('West');
  }
});

buttonEast.addEventListener('click', () => {
  if(toggle) {
    makeGuess('East');
  }
});

nextQuote.addEventListener('click', () => {
  getNextQuote();
});
