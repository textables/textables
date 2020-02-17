require('dotenv').config();
const request = require('supertest');
const app = require('../lib/app');
const connect = require('../lib/utils/connect');
const mongoose = require('mongoose');
const Source = require('../lib/models/Source');
const Text = require('../lib/models/Text');

const alice1 = require('../lib/data/alice-in-wonderland');
const alice2 = require('../lib/data/through-the-looking-glass');
const testText = `${alice1.text} ${alice2.text}`;

describe('Cron Route Test', () => {

  beforeAll(() => connect());

  beforeEach(async() => {
    const sources = await Source.create([{
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

  it('can send a quote to the cron job controller and return complete', () => {
    return request(app)
      .post(`/api/v1/cron/${process.env.TWITTER || 'test'}`)
      .then(res => {
        expect(res.text).toEqual('complete');
      });
  });
});
