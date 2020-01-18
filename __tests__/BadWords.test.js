require('dotenv').config();

const { arrayIncludesABadWord } = require('../lib/createNewSentence');

describe.skip('arrayInclude function should', () => {

  it('return true if string includes "bad" word (example 1)', () => {
    const result = arrayIncludesABadWord(['dog'], 'i have a dog named spot');
    expect(result).toEqual(true);
  });

  it('return true if array includes "bad" word (example 2)', () => {
    const result = arrayIncludesABadWord(['cat', 'dog'], 'i have a dog named spot');
    expect(result).toEqual(true);
  });

  it('return true if array includes "bad" word (example 3)', () => {
    const result = arrayIncludesABadWord(['dog', 'cat'], 'i have a dog named spot');
    expect(result).toEqual(true);
  });

  it('return false if array does not include "bad" word', () => {
    const result = arrayIncludesABadWord(['cat'], 'i have a dog named spot');
    expect(result).toEqual(false);
  });

  it('returns true if array includes part of a "bad" word', () =>{
    const result = arrayIncludesABadWord(['ca'], 'I have a accat named garfield');
    expect(result).toEqual(true);
  });

  it('checks our createNewSentence function', () => {
    function createNewSentence() {
      let generatedSentence = 'I have a dog';
      while(generatedSentence.length > 260 || arrayIncludesABadWord(['dog', 'cat'], generatedSentence)) {
        generatedSentence = 'I have a lizard';
      }
      return generatedSentence;
    }

    expect(createNewSentence()).toEqual('I have a lizard');
  });
});
