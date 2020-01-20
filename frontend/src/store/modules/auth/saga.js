import {takeLatest, call, put, all} from 'redux-saga/effects';
import {toast} from 'react-toastify';
import {signInSuccess, signFailure} from './actions';

import history from '~/services/history';
import api from '~/services/api';

export function* signIn({payload}) {
    try {
        const {email, password} = payload;

        const response = yield call(api.post, 'sessions', {email, password});

        const {token, user} = response.data;

        if (!user.provider) {
            toast.error('O usuário não é um provider');
            return;
        }

        api.defaults.headers.Authorization = `Bearer ${token}`;

        yield put(signInSuccess(token, user));
        history.push('/dashboard');
    } catch (error) {
        toast.error('Falha na autenticação, verifique o seus dados de acesso.');
        yield put(signFailure());
    }
}

export function* signUp({payload}) {
    try {
        const {name, email, password} = payload;

        yield call(api.post, 'users', {
            name,
            email,
            password,
            provider: true,
        });
        history.push('/dashboard');
    } catch (error) {
        toast.error('Falha no cadastro, verifique o seus dados.');
        yield put(signFailure());
    }
}

export function setToken({payload}) {
    if (!payload) return;

    const {token} = payload.auth;

    if (token) {
        api.defaults.headers.Authorization = `Bearer ${token}`;
    }
}

export default all([
    takeLatest('persist/REHYDRATE', setToken),
    takeLatest('@auth/SIGN_IN_REQUEST', signIn),
    takeLatest('@auth/SIGN_UP_REQUEST', signUp),
]);