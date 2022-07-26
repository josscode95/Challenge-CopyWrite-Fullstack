const { describe, test } = require("mocha");
const assert = require('chai').assert
const request = require('supertest')

const API = 'http://localhost:4444'

describe('GET /iecho', () => {
  test('should responde with a 200 status code', async() => {
    const response = await request(API).get('/iecho').send()
    console.log(response);
  })
})

