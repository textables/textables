const arrayOfBadWords = [process.env.BAD_WORD1, process.env.BAD_WORD2, process.env.BAD_WORD3, process.env.BAD_WORD4, process.env.BAD_WORD5];

const arrayIncludesABadWord = (arrayOfBadWords, generatedQuote) => {
  let results = false;
  arrayOfBadWords.forEach(badWord => {
    if(generatedQuote.includes(badWord)) {
      results = true;
    }
  });
  return results;
};

function createNewSentence(markov) {
  let generatedSentence = markov.makeSentence({ tries: 20 });
  while(generatedSentence.length > 260 || arrayIncludesABadWord(arrayOfBadWords, generatedSentence)) {
    generatedSentence = markov.makeSentence();
  }

  return generatedSentence;
}

module.exports = {
  arrayIncludesABadWord,
  createNewSentence,
  arrayOfBadWords
};
