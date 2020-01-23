import React from 'react';

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

export default function SignUp({navigation}) {
    return (
        <Background>
            <Container>
                <Image source={logo} />
                <Form>
                    <FormInput
                        icon="person-outline"
                        autoCorrect={false}
                        autoCapitalize="none"
                        placeholder="Digite o seu nome"
                    />

                    <FormInput
                        icon="mail-outline"
                        keyboardType="email-address"
                        autoCorrect={false}
                        autoCapitalize="none"
                        placeholder="Digite o seu e-mail"
                    />

                    <FormInput
                        icon="lock-outline"
                        secureTextEntry
                        placeholder="Digite a sua senha"
                    />
                    <SubmitButton onPress={() => {}}>Acessar</SubmitButton>
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
