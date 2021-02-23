var request = require('supertest');
const app = require('./index.js').app;
const server = require('./index.js').server

afterAll((done) => {
  server.close(done);
});

describe('GET /', function() {
  it('test response', (done)=>{
    request(app).get('/').expect({
      responseCode:200,
      responseMessage:'Everything worked as expected',
      responseData: {}
    }, done);
  });
});
  
describe('POST /', function() {
  it('test response', (done)=>{
    request(app).post('/').send({'userId':1}).expect({
      responseCode:200,
      responseMessage:'Everything worked as expected',
      responseData: {user_id:2}
    }, done);
  });
});