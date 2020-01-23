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

import {signInRequest} from '~/store/modules/auth/actions';

export default function SignIn({navigation}) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const loading = useSelector(state => state.auth.loading);

    const passwordRef = useRef();
    const dispatch = useDispatch();

    function handleSubmit() {
        dispatch(signInRequest(email, password));
    }

    return (
        <Background>
            <Container>
                <Image source={logo} />
                <Form>
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
                    />

                    <FormInput
                        icon="lock-outline"
                        secureTextEntry
                        valeu={password}
                        onChangeText={setPassword}
                        placeholder="Digite a sua senha"
                        returnKeyType="send"
                        onSubmitEditing={handleSubmit}
                        ref={passwordRef}
                    />
                    <SubmitButton onPress={handleSubmit} loading={loading}>
                        Acessar
                    </SubmitButton>
                </Form>
                <SignLink
                    onPress={() => {
                        navigation.navigate('SingUp');
                    }}>
                    <SignLinkText>Criar conta gratuíta</SignLinkText>
                </SignLink>
            </Container>
        </Background>
    );
}
