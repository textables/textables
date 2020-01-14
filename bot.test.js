const { generateText } = require('./bot');
require('dotenv').config();

const connect = require('./lib/utils/connect');
const mongoose = require('mongoose');

const Source = require('./lib/models/Source');
const Text = require('./lib/models/Text');

const testText = require('./lib/data/alice-in-wonderland');

describe('gen text test', () => {
  beforeAll(() => {
    connect();
  });

  beforeEach(() => {
    return mongoose.connection.dropDatabase();
  });

  let source;

  beforeEach(async() => {
    source = await Source.create({
      firstName: 'Jorl',
      lastName: 'Der'
    });
    await Text.create({
      text: testText.text,
      source: source._id,
      medium: 'smells'
    });
  });

  afterAll(() => {
    return mongoose.connection.close();
  });

  it('can return a random sample', async() => {
    return await generateText('Jorl')
      .then(res => {
        console.log(res);
        expect(res).toEqual(expect.any(String));
        expect(res.length).toBeLessThan(280);
      });
  });
});

