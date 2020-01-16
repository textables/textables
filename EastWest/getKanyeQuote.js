import kanyeWestQuotes from './kanye-quotes.js';

const kanyeEastID = '5e1e511c46795e1e5d27356f';

async function getQuoteFromKanye() {
  console.log('ran get quote from kanye');
  const kanye = Math.floor(Math.random() * 2);

  let quote = {
    source: '',
    text: ''
  };

  if(kanye) {
    const kQuoteIndex = Math.floor(Math.random() * kanyeWestQuotes.length);
    quote.text = kanyeWestQuotes[kQuoteIndex];
    quote.source = 'West';
  } else if(!kanye) {
    const quoteObject = await fetch(`/api/v1/results/${kanyeEastID}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(res => res.json());
      
    console.log('quote Obj: ' + quoteObject);
    quote.text = quoteObject.tweetText;
    quote.source = 'East';
  }
  return quote;
}

export default getQuoteFromKanye;
