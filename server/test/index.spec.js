const { describe, test } = require("mocha");
const expect = require('chai').expect
const request = require('supertest')

const API = 'http://localhost:4444'

describe('GET /iecho', () => {
  test('should responde with a 200 status code', async() => {
    const response = await request(API).get('/iecho?text=otto').send()
    expect(response.statusCode).to.equal(200)
  })
  test('should have text with required property', async() => {
    const response = await request(API).get('/iecho?text=todos').send()
    expect(response.body[0]).to.have.a.property('text')
  })
  test('should response with an array', async() => {
    const response = await request(API).get('/iecho/all').send()
    expect(response.body).to.be.an('array')
    expect(response.body).to.be.an.instanceof(Array)
  })
})

