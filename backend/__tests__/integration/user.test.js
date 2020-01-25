/* eslint-disable no-undef */
import request from 'supertest';
import bcrypt from 'bcryptjs';

import app from '../../src/app';
import truncate from '../util/truncate';

import User from '../../src/app/models/User';

describe('User', () => {
    beforeEach(async () => {
        await truncate();
    });

    it('It should create a new user', async () => {
        const response = await request(app)
            .post('/users')
            .send({
                name: 'Heitor Neto',
                email: 'heitorh3@gmail.com',
                password: '123456',
            });

        expect(response.body).toHaveProperty('id');
    });

    it('Can get a user by name and e-mail', async () => {
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

    it('Should not be able to register with duplicated email', async () => {
        const userPayload = {
            name: 'Maria do Carmo',
            email: 'maria@gmail.com',
            password: '123456',
        };

        await request(app)
            .post('/users')
            .send(userPayload);

        const response = await request(app)
            .post('/users')
            .send(userPayload);

        expect(response.status).toBe(400);
    });

    it('Should encrypt user password when new user created', async () => {
        const user = await User.create({
            name: 'Maria do Carmo',
            email: 'maria@gmail.com',
            password: '123456',
        });

        const compareHash = await bcrypt.compare('123456', user.password_hash);

        expect(compareHash).toBe(true);
    });
});
