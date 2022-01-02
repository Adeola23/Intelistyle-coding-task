const request = require('supertest')
const app = require('../../app')

describe ('Test Get garment', () => {
    test('it should respond with 200 success', async () => {
        const response = await request(app)
            .get('/find/shoe')
            .expect('Content-Type', /json/)

    })

})