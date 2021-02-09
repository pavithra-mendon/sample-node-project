var request = require('supertest');
var app = require('./index.js');
  
var request = require('supertest');
var app = require('./index.js');

describe('GET /', function() {
    it('test response', (done)=>{
      request(app).get('/').expect({
          responseCode:200,
          responseMessage:'Everything worked as expected',
          responseData: {}
      },done);
    });
  });
  
  describe('POST /', function() {
    it('test response', (done)=>{
      request(app).post('/').send({'userId':1}).expect({
          responseCode:200,
          responseMessage:'Everything worked as expected',
          responseData: {user_id:1}
      },done);
    });
  });