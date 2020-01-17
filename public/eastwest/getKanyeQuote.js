import kanyeWestQuotes from './kanye-quotes.js';

const kanyeEastID = '5e1e511c46795e1e5d27356f';

async function getQuoteFromKanye() {
  const kanye = Math.floor(Math.random() * 2);

  let quote = {
    source: '',
    text: ''
  };

  if(kanye) {
    const kQuoteIndex = Math.floor(Math.random() * kanyeWestQuotes.length);
    quote.text = `"${kanyeWestQuotes[kQuoteIndex]}"`;
    quote.source = 'West';
    return quote;
  } else if(!kanye) {
    let quoteObject = await fetch(`/api/v1/results/${kanyeEastID}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(res => res.json())
      .then(quoteObject => {
        quote.text = `"${quoteObject.tweetText}`;
        quote.source = 'East';
        return quote;
      });
    return quoteObject;
  }
}

export default getQuoteFromKanye;
