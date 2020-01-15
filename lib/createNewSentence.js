const arrayOfBadWords = [process.env.BAD_WORD1, process.env.BAD_WORD2, process.env.BAD_WORD3, process.env.BAD_WORD4, process.env.BAD_WORD5];

const arrayIncludes = (arrayOfBadWords, generatedQuote) => {
  arrayOfBadWords.forEach(badWord => {
    if(generatedQuote.includes(badWord)) return false;
  });
  return true;
};

module.exports = function createNewSentence(markov) {
  let generatedSentence = markov.makeSentence({ tries: 20 });
  while (generatedSentence.length > 260 && arrayIncludes(arrayOfBadWords, generatedSentence)) {
    generatedSentence = markov.makeSentence();
  }

  return generatedSentence;
};