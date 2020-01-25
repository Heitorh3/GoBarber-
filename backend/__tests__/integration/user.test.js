/* eslint-disable no-undef */
import request from 'supertest';
import bcrypt from 'bcryptjs';

import app from '../../src/app';
import truncate from '../util/truncate';

import factoris from '../factories';

describe('User', () => {
    beforeEach(async () => {
        await truncate();
    });

    it('It should create a new user', async () => {
        const user = await factoris.attrs('User');

        const response = await request(app)
            .post('/users')
            .send(user);

        expect(response.body).toHaveProperty('id');
    });

    it('Can get a user by name and e-mail', async () => {
        const userPayload = await factoris.attrs('User', {
            name: 'Heitor Neto',
            email: 'heitorh3@gmail.com',
        });

        const response = await request(app)
            .post('/users')
            .send(userPayload);

        expect(response.body.name).toEqual(userPayload.name);
        expect(response.body.email).toEqual(userPayload.email);
    });

    it('Should not be able to register with duplicated email', async () => {
        const userPayload = await factoris.attrs('User');

        await request(app)
            .post('/users')
            .send(userPayload);

        const response = await request(app)
            .post('/users')
            .send(userPayload);

        expect(response.status).toBe(400);
    });

    it('Should encrypt user password when new user created', async () => {
        const user = await factoris.create('User', {
            password: '123456',
        });

        const compareHash = await bcrypt.compare('123456', user.password_hash);

        expect(compareHash).toBe(true);
    });
});
