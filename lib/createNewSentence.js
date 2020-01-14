module.exports = function createNewSentence(markov) {
  let generatedSentence = markov.makeSentence();
  while(generatedSentence.length > 280) {
    generatedSentence = markov.makeSentence();
  }
  return generatedSentence;
};
