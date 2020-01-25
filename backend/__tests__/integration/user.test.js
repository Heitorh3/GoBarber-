/* eslint-disable no-undef */
import request from 'supertest';
import app from '../../src/app';

describe('User', () => {
    test('It should create a new user', async () => {
        const response = await request(app)
            .post('/users')
            .send({
                name: 'Heitor Neto',
                email: 'heitorh3@gmail.com',
                password: '123456',
            });

        expect(response.body).toHaveProperty('id');
    });

    test('Can get a user by name and e-mail', async () => {
        const userPayload = {
            name: 'Maria do Carmo',
            email: 'maria@gmail.com',
            password: '123456',
        };

        const response = await request(app)
            .post('/users')
            .send(userPayload);

        expect(response.body.name).toEqual(userPayload.name);
        expect(response.body.email).toEqual(userPayload.email);
    });
});
