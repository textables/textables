require('dotenv').config();
const request = require('supertest');
const app = require('../lib/app');
const connect = require('../lib/utils/connect');
const mongoose = require('mongoose');
const HighScore = require('../lib/models/HighScore')

describe('route tests', () => {


  beforeAll(() => {
    connect();
  });


  beforeEach(() => {
    return mongoose.connection.dropDatabase();
  });

  let lowscore;

  beforeEach(async() => {
    await HighScore.create({
      name: 'North',
      score: 5
    });
    lowscore = await HighScore.create({
      name: 'Other',
      score: 1
    });
    await HighScore.create({
      name: 'South',
      score: 10
    });

  });

  afterAll(() => {
    return mongoose.connection.close();
  });

  // it.skip('can send a quote to the cron job controller and return complete', () => {
  //   return request(app)
  //     .post('/api/v1/cron')
  //     .then(res => {
  //       expect(res.text).toEqual('complete');
  //     });
  // });

  it('can add a new highscore', () => {
    return request(app)
      .post('/api/v1/highscores')
      .send({
        name: 'North',
        score: 8
      })
      .then(res => {
        expect(res.body).toEqual({
          _id: expect.any(String),
          name: 'North',
          score: 8,
          timestamp: expect.any(String),
          __v: 0
        });
      });
  });

  it('can get all highscores', () => {
    return request(app)
      .get('/api/v1/highscores')
      .then(res => {
        expect(res.body).toEqual([{
          _id: expect.any(String),
          name: 'North',
          score: 5,
          timestamp: expect.any(String),
          __v: 0
        },
        {
          _id: expect.any(String),
          name: 'Other',
          score: 1,
          timestamp: expect.any(String),
          __v: 0
        },
        {
          _id: expect.any(String),
          name: 'South',
          score: 10,
          timestamp: expect.any(String),
          __v: 0
        }]);
      });
  });

  it('can get the lowest scoring highscore', () => {
    return request(app)
      .get('/api/v1/highscores/lowest')
      .then(res => 
        expect(res.body).toEqual({
          _id: expect.any(String),
          name: 'Other',
          score: 1,
          timestamp: expect.any(String),
          __v: 0
        }));
  });

  it('can delete a highscore', () => {
    return request(app)
      .del(`/api/v1/highscores/${lowscore._id}`)
      .then(res => {
        expect(res.body).toEqual({
          _id: expect.any(String),
          name: 'Other',
          score: 1,
          timestamp: expect.any(String),
          __v: 0
        });
      });
  });

  it('can find and delete the lowest highscore', () => {
    return request(app)
      .del('/api/v1/highscores/lowest/delete')
      .then(res => {
        expect(res.body).toEqual({
          _id: expect.any(String),
          name: 'Other',
          score: 1,
          timestamp: expect.any(String),
          __v: 0
        });
      });
  });

});
