const request = require('supertest');
// const User = require('../../server/models/userModel.js');
const server = 'http://localhost:3000';

describe('Route integration', () => {
  const username = 'test' + Math.random()*100;
  const body = {username, password: 'test'}
  console.log(username)

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
  describe('/user', () => {
    
    describe('POST /', () => {
      it('responds with 201 status code', () => {
        return request(server)
          .post('/user')
          .send(JSON.stringify(body))
          .set('Content-Type', 'application/json')
          .expect(201);
      })
    })

    describe('PATCH', () => {
      body.money = 1000;
      body.handsWon = 2;
      it('responds with 200 status code and json response', () => {
        return request(server)
          .patch(`/user/${username}`)
          .send(JSON.stringify(body))
          .set('Content-Type', 'application/json')
          .expect(200)
          .expect('Content-Type', /json/);
      })
    })

    describe('POST /login', () => {
      it('responds with 200 status code and json response', () => {
        return request(server)
          .post('/user/login')
          .send(JSON.stringify(body))
          .expect(200)
          .expect('Content-Type', /json/);
      })
    })

    describe('GET user', () => {
      it('responds with 201 status code', () => {
        return request(server)
          .get(`/user/${username}`)
          .send(JSON.stringify(body))
          .expect(201)
      })
    })

  })
})