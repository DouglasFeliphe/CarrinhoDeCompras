
const supertest = require('supertest')
const clientRoutes = require('./clientRoutes');

describe('Test the clients path', () => {

    test('It should response the GET met', async () => {
        const response = await supertest(clientRoutes).get('/clients')
        expect(response.body).toBe('ok')
    });

    test('should return status 200 for get clients', async () => {
        const response = await supertest(clientRoutes).get('/clients')
        expect(response.status).toBe(200)
    });

    test('should return status 200 for post client', async () => {
        const response = await supertest(clientRoutes).post('/clients')
        expect(response.status).toBe(200)
    });
})