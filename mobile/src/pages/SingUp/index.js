/* eslint-disable react/prop-types */
import React, {useRef, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import {Image} from 'react-native';
import Background from '~/components/Background';

import logo from '~/assets/logo.png';
import {
    Container,
    Form,
    FormInput,
    SubmitButton,
    SignLink,
    SignLinkText,
} from './styles';

import {signUpRequest} from '~/store/modules/auth/actions';

export default function SignUp({navigation}) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const loading = useSelector(state => state.auth.loading);

    const dispatch = useDispatch();

    const emailRef = useRef();
    const passwordRef = useRef();

    function handleSubmit() {
        dispatch(signUpRequest(name, email, password));
    }

    return (
        <Background>
            <Container>
                <Image source={logo} />
                <Form>
                    <FormInput
                        icon="person-outline"
                        autoCorrect={false}
                        autoCapitalize="none"
                        value={name}
                        onChangeText={setName}
                        placeholder="Digite o seu nome"
                        returnKeyType="next"
                        onSubmitEditing={() => {
                            emailRef.current.focus();
                        }}
                    />

                    <FormInput
                        icon="mail-outline"
                        keyboardType="email-address"
                        autoCorrect={false}
                        autoCapitalize="none"
                        valeu={email}
                        onChangeText={setEmail}
                        placeholder="Digite o seu e-mail"
                        returnKeyType="next"
                        onSubmitEditing={() => {
                            passwordRef.current.focus();
                        }}
                        ref={emailRef}
                    />

                    <FormInput
                        icon="lock-outline"
                        secureTextEntry
                        value={password}
                        onChangeText={setPassword}
                        placeholder="Digite a sua senha"
                        returnKeyType="send"
                        onSubmitEditing={handleSubmit}
                        ref={passwordRef}
                    />
                    <SubmitButton onPress={handleSubmit} loading={loading}>
                        Cadastrar
                    </SubmitButton>
                </Form>
                <SignLink
                    onPress={() => {
                        navigation.navigate('SignIn');
                    }}>
                    <SignLinkText>Já possuo uma conta</SignLinkText>
                </SignLink>
            </Container>
        </Background>
    );
}
