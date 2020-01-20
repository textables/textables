import getQuoteFromKanye from './getKanyeQuote.js';
import { checkForHighScore } from './checkAndAddHighScore.js';

let streakCount = 0;
let quoteObject;
let toggle = true;

const buttonWest = document.getElementById('west');
const buttonEast = document.getElementById('east');
const quote = document.getElementById('quote');
const attribution = document.getElementById('attribution');
const nextQuote = document.getElementById('next-quote');
const streakDisplay = document.getElementById('streak');
const fullAttribution = document.getElementById('full-attrib');
const highScoreForm = document.getElementById('highscore-form');
const submitSuccess = document.getElementById('submit-success');
const toHighScores = document.getElementById('to-highscores');
const gameOver = document.getElementById('game-over');

const winSound = new Audio('../assets/yeah.wav');
const loseSound = new Audio('../assets/naahhhhhhh.wav');

async function onRender() {
  await getQuoteFromKanye()
    .then(res => {
      quoteObject = res;
      quote.textContent = res.text;
    });
}

onRender();

async function makeGuess(kanyeGuessed) {
  attribution.textContent = quoteObject.source;
  toggle = false;

  buttonWest.classList.remove('normal');
  buttonEast.classList.remove('normal');
  streakDisplay.classList.remove('normal-points');

  if(quoteObject.source === 'West') {
    buttonWest.classList.add('correct');
    buttonEast.classList.add('wrong');
  } else if(quoteObject.source === 'East') {
    buttonEast.classList.add('correct');
    buttonWest.classList.add('wrong');
  }

  if(quoteObject.source === kanyeGuessed) {
    winSound.play(); 
    streakCount++;
    streakDisplay.classList.add('add-point');
    promptPlayerForNextQuote();
  } else {
    loseSound.play();
    gameOver.classList.remove('hidden');
    streakDisplay.classList.add('reset-points');
    if(await checkForHighScore(streakCount)) {
      displayNewHSForm();
    } else {
      streakCount = 0;
      streakDisplay.classList.add('reset-points');
      promptPlayerForNextQuote();
    }
  }
}

function promptPlayerForNextQuote() {
  streakDisplay.textContent = streakCount;
  nextQuote.classList.remove('hidden');
}

function displayNewHSForm() {
  quote.textContent = `You did your Kanye Best with a score of ${streakCount}`;

  fullAttribution.classList.add('hidden');
  highScoreForm.classList.remove('hidden');
}

async function getNextQuote() {
  toggle = true;
  attribution.textContent = '????';
  gameOver.classList.add('hidden');
  nextQuote.classList.add('hidden');
  submitSuccess.classList.add('hidden');
  toHighScores.classList.add('hidden');
  fullAttribution.classList.remove('hidden');

  streakDisplay.classList.remove('reset-points');
  streakDisplay.classList.remove('add-point');
  streakDisplay.classList.add('normal-points');
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

highScoreForm.addEventListener('submit', event => {
  event.preventDefault();

  const formData = new FormData(event.target);

  const highscoreObj = {
    name: formData.get('name'),
    score: streakCount
  };
  
  fetch('/api/v1/highscores', {
    method: 'POST',
    headers: { 
      'Content-Type': 'application/json' 
    },
    body: JSON.stringify(highscoreObj)
  })
    .then(res => res.json())
    .then(res => {
      highScoreForm.classList.add('hidden');
      if(res.name) fetch('/api/v1/highscores/lowest/delete', {
        method: 'DELETE',
        header: { 'Content-Type': 'application/json' }
      });
      submitSuccess.classList.remove('hidden');
      toHighScores.classList.remove('hidden');
      streakCount = 0;
      promptPlayerForNextQuote();
    });
});

toHighScores.addEventListener('click', () => {
  window.location.href = './leaderboard.html';
});
