import { fetchRandom, fetchWithSource } from './services/fetch-functions.js';

const listOfRadioButtons = document.querySelectorAll('input');
const quoteTextArea = document.querySelector('.quote-bubble');

async function onLoad() {
  const data = await fetchRandom();
  quoteTextArea.innerHTML = `"${data.tweetText}" <br><br>- ${data.source.fullName}`;
}

onLoad();

listOfRadioButtons.forEach(buttonValue => {
  buttonValue.addEventListener('click', async(event) => {
    const chosenSource = event.target.value;
    if(chosenSource === 'surprise-me') {
      const data = await fetchRandom();
      quoteTextArea.innerHTML = `"${data.tweetText}" <br><br>- ${data.source.fullName}`;
    } else {

      const queryString = window.location.hash.slice(1);
      const searchParams = new URLSearchParams(queryString);
      searchParams.set('sourceId', chosenSource);
      window.location.hash = searchParams.toString();

      const data = await fetchWithSource(chosenSource);
      quoteTextArea.innerHTML = `"${data.tweetText}" <br><br>- ${data.source.fullName}`;
    }
  });



});
