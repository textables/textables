require('dotenv').config();

const { arrayIncludes } = require('../lib/createNewSentence');

describe('arrayInclude function should', () => {

  it('return false if string includes "bad" word (example 1)', () => {
    const result = arrayIncludes(['dog'], 'i have a dog named spot');
    expect(result).toEqual(false);
  });

  it('return false if array includes "bad" word (example 2)', () => {
    const result = arrayIncludes(['cat', 'dog'], 'i have a dog named spot');
    expect(result).toEqual(false);
  });

  it('return false if array includes "bad" word (example 3)', () => {
    const result = arrayIncludes(['dog', 'cat'], 'i have a dog named spot');
    expect(result).toEqual(false);
  });

  it('return true if array does not include "bad" word', () => {
    const result = arrayIncludes(['cat'], 'i have a dog named spot');
    expect(result).toEqual(true);
  });
});
