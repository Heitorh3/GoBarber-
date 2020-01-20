import React from 'react';
import {Link} from 'react-router-dom';

import logo from '~/assets/logo.svg';

export default function SignIn() {
    return (
        <>
            <img src={logo} alt="GoBarber" />
            <form>
                <input type="email" placeholder="Seu e-mail" />
                <input type="password" placeholder="Sua senha" />

                <button type="button">Acessar</button>
                <Link to="/register">Cadastrar gratuitamente</Link>
            </form>
        </>
    );
}
