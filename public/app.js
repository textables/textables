import { fetchRandom, fetchWithSource } from './services/fetch-functions.js';

const listOfRadioButtons = document.querySelectorAll('input');
const quoteTextArea = document.querySelector('.quote-bubble');

async function onLoad() {
  const selectedSource = localStorage.getItem('source');

  if(selectedSource){
    loading(true);
    const data = await fetchWithSource(selectedSource);
    loading(false);
    quoteTextArea.innerHTML = `"${data.tweetText}" <br><br>- ${data.source.fullName}`;
  
  } else {
    loading(true);
    const data = await fetchRandom();
    loading(false);
    quoteTextArea.innerHTML = `"${data.tweetText}" <br><br>- ${data.source.fullName}`;  
  }
}

onLoad();

listOfRadioButtons.forEach(buttonValue => {
  buttonValue.addEventListener('click', async(event) => {
    const chosenSource = event.target.value;
    if(chosenSource === 'surprise-me') {
      loading(true);
      localStorage.clear();
      const data = await fetchRandom();
      loading(false);
      quoteTextArea.innerHTML = `"${data.tweetText}" <br><br>- ${data.source.fullName}`;
    } else {
      loading(true);
      localStorage.setItem('source', chosenSource);
      const data = await fetchWithSource(chosenSource);
      loading(false);
      quoteTextArea.innerHTML = `"${data.tweetText}" <br><br>- ${data.source.fullName}`;
    }
  });
});

function loading(state){
  if(state === true){
    quoteTextArea.innerHTML = '<img id="loading" src="./assets/loading.gif"></img>';
  } else {
    return;
  }
}
