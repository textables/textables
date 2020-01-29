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

// the tries thing does what your while loop is already doing
function createNewSentence(markov) {
  let generatedSentence;
  do {
    generatedSentence = markov.makeSentence({ maxChars: 260 });
  } while(arrayIncludesABadWord(arrayOfBadWords, generatedSentence))

  return generatedSentence;
}

module.exports = {
  arrayIncludesABadWord,
  createNewSentence,
  arrayOfBadWords
};
