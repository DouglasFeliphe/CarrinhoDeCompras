
const supertest = require('supertest')
const clientRoutes = require('../Routes/clientRoutes');
const db = require('../database_connection');


describe('Test the clients path', () => {
    beforeAll(() => {
        // database_connection.connect();
    });

    test('should return this client', async () => {
        const res = await supertest(clientRoutes).get('/clients')
        expect(res.body).toEqual({ password: 123123, name: 'foo' })
    });

    test('should not return this client', async () => {
        const res = await supertest(clientRoutes).get('/clients')
        expect(res.body).not.toEqual({ password: 111111, name: 'foo' })
    });

    test('should post client', async () => {

        const { rows } = await db.query("SELECT * FROM client WHERE name = 'baz'")

        const res = await supertest(clientRoutes)
            .post('/client')
            .send(JSON.stringify({ name: 'baz', password: 333333 }))
            .set('Accept', 'application/json')
        expect(res.body).toEqual(rows[0])
    });

    afterAll((done) => {
        // database_connection.end(done);
    });
})