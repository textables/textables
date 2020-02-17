const arrayOfBadWords = [process.env.BAD_WORD1, process.env.BAD_WORD2, process.env.BAD_WORD3, process.env.BAD_WORD4, process.env.BAD_WORD5];

const arrayIncludesABadWord = (arrayOfBadWords, generatedQuote) => {
  return arrayOfBadWords.some(badWord => generatedQuote.includes(badWord));
};

function createNewSentence(markov) {
  let generatedSentence;
  do{
    generatedSentence = markov.makeSentence({ maxChars: 260 });
  } while(arrayIncludesABadWord(arrayOfBadWords, generatedSentence));

  return generatedSentence;
}

module.exports = {
  arrayIncludesABadWord,
  createNewSentence,
  arrayOfBadWords
};
