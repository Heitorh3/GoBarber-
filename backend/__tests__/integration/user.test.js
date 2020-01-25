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
});
