/* eslint-disable react/prop-types */
import React, {useRef, useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import Icon from 'react-native-vector-icons/MaterialIcons';

import Background from '~/components/Background';

import {
    Container,
    Title,
    Form,
    FormInput,
    SubmitButton,
    Separator,
} from './styles';

import {updateProfileRequest} from '~/store/modules/user/actions';

export default function Profile() {
    const loading = useSelector(state => state.auth.loading);
    const profile = useSelector(state => state.user.profile);

    const dispache = useDispatch();

    const [name, setName] = useState(profile.name);
    const [email, setEmail] = useState(profile.email);

    const [oldPassword, setOldPassword] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const emailRef = useRef();
    const passwordRef = useRef();
    const oldPasswordRef = useRef();
    const confirmPasswordRef = useRef();

    function handleSubmit() {
        dispache(
            updateProfileRequest({
                name,
                email,
                password,
                oldPassword,
                confirmPassword,
            })
        );
    }

    useEffect(() => {
        setOldPassword('');
        setPassword('');
        setConfirmPassword('');
    }, [profile]);

    return (
        <Background>
            <Container>
                <Title>Meu perfil</Title>
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
                            oldPasswordRef.current.focus();
                        }}
                        ref={emailRef}
                    />

                    <Separator />

                    <FormInput
                        icon="lock-outline"
                        secureTextEntry
                        value={oldPassword}
                        onChangeText={setOldPassword}
                        placeholder="Sua senha atual"
                        returnKeyType="next"
                        onSubmitEditing={() => {
                            passwordRef.current.focus();
                        }}
                        ref={oldPasswordRef}
                    />

                    <FormInput
                        icon="lock-outline"
                        secureTextEntry
                        value={password}
                        onChangeText={setPassword}
                        placeholder="Digite a sua nova senha"
                        returnKeyType="next"
                        onSubmitEditing={() => {
                            confirmPasswordRef.current.focus();
                        }}
                        ref={oldPasswordRef}
                    />

                    <FormInput
                        icon="lock-outline"
                        secureTextEntry
                        value={confirmPassword}
                        onChangeText={setConfirmPassword}
                        placeholder="Confirme a sua nova senha"
                        returnKeyType="send"
                        onSubmitEditing={handleSubmit}
                    />
                    <SubmitButton onPress={handleSubmit} loading={loading}>
                        Atualizar perfil
                    </SubmitButton>
                </Form>
            </Container>
        </Background>
    );
}

Profile.navigationOptions = {
    tabBarLabel: 'Meu perfil',
    tabBarIcon: ({tintColor}) => (
        <Icon name="person" size={20} color={tintColor} />
    ),
};
