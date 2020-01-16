require('dotenv').config();
const request = require('supertest');
const app = require('../lib/app');
const connect = require('../lib/utils/connect');
const mongoose = require('mongoose');

describe('route tests', () => {


  beforeAll(() => {
    connect();
  });


  beforeEach(() => {
    return mongoose.connection.dropDatabase();
  });

  afterAll(() => {
    return mongoose.connection.close();
  });

  it('can send a quote to the cron job controller and return complete', () => {
    return request(app)
      .post('/api/v1/cron')
      .then(res => {
        expect(res.text).toEqual('complete');
      });
  });

});
