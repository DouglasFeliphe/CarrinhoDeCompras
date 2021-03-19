
const supertest = require('supertest')
const clientRoutes = require('../Routes/clientRoutes');
const database_connection = require('../database_connection');


describe('Test the clients path', () => {
    beforeAll(() => {
        // database_connection.connect();
    });
    test('should post client', async () => {
        const res = await supertest(clientRoutes).post('/client')
        expect(res.body)
    });

    // test('should return this client', async () => {
    //     const res = await supertest(clientRoutes).get('/clients')
    //     expect(res.body).toEqual({ password: 123123, name: 'foo' })
    // });

    // test('should not return this client', async () => {
    //     const res = await supertest(clientRoutes).get('/clients')
    //     expect(res.body).not.toEqual({ password: 111111, name: 'foo' })
    // });

    // test('should post client', async () => {

    //     const clients = await supertest(clientRoutes).get('/clients')

    //     console.log(clients);

    //     await supertest(clientRoutes)
    //         .post('/client')
    //         .send({ name: 'john', password: '12356' })
    //         .then(response => {
    //             expect(res).toBe(200)
    //         })
    // });

    afterAll((done) => {
        // database_connection.end(done);
    });
})