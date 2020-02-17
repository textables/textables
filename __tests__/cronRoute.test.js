require('dotenv').config();
const request = require('supertest');
const app = require('../lib/app');
const connect = require('../lib/utils/connect');

describe('Cron Route Test', () => {

  beforeAll(() => connect());

  it('can send a quote to the cron job controller and return complete', () => {
    return request(app)
      .post(`/api/v1/cron/${process.env.TWITTER || 'test'}`)
      .then(res => {
        expect(res.text).toEqual('complete');
      });
  });
});
