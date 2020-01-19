require('dotenv').config();
const connect = require('../lib/utils/connect');
const mongoose = require('mongoose');

const Source = require('../lib/models/Source');
const Text = require('../lib/models/Text');

const alice1 = require('../lib/data/alice-in-wonderland');
const alice2 = require('../lib/data/through-the-looking-glass');
const testText = `${alice1.text} ${alice2.text}`;
const randomizer = require('../lib/utils/randomizer');

describe('Source models returnQuoteObject() static', () => {
  beforeAll(() => {
    connect();
  });

  beforeEach(() => {
    return mongoose.connection.dropDatabase();
  });

  let sources;

  beforeEach(async() => {
    sources = await Source.create([{
      fullName: 'Lewis Carroll'
    }, {
      fullName: 'Jane Austen'
    }, {
      fullName: 'Edgar Allan Poe'
    }]);
    await Text.create({
      text: testText,
      source: sources[0]._id,
      medium: 'smells'
    });
    await Text.create({
      text: testText,
      source: sources[1]._id,
      medium: 'smells'
    });
    await Text.create({
      text: testText,
      source: sources[2]._id,
      medium: 'smells'

    });
  });

  afterAll(() => {
    return mongoose.connection.close();
  });

  it('can return a random sample', async() => {
    const fullName = await randomizer();
    return Source.returnQuoteObject(fullName)
      .then(res => {
        expect(res).toEqual({
          quote: res.quote,
          source: res.source,
          sourceId: res.sourceId
        });
        expect(res.quote.length).toBeLessThan(280);
      });
  });
});

