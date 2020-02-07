require('dotenv').config();
const request = require('supertest');
const app = require('../lib/app');
const connect = require('../lib/utils/connect');

function deleteKanye() {
  return request(app)
    .del('/api/v1/results/')
    .then(res => console.log(res.length));
}

connect();
deleteKanye();
