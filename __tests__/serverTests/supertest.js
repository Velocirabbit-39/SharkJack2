const request = require('supertest');

const server = 'http://localhost:3000';

const db = require('../../server/testDb');

describe('Route integration', () => {

  beforeAll(async () => await db.connect());

  afterEach(async () => await db.clearDatabase());
  
  afterAll(async () => await db.closeDatabase());

  describe('/', () => {
    describe('GET', () => {
      it('responds with 200 status and text/html content type', () => {
        return request(server)
          .get('/')
          .expect('Content-Type', /text\/html/)
          .expect(200);
      });
    });
  });
  // describe('/user', () => {
  //   describe('POST', () => {
  //     it('')
  //   })
  // })
})