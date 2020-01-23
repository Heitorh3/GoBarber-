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

export default function SignIn({navigation}) {
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
                        navigation.navigate('SingUp');
                    }}>
                    <SignLinkText>Criar conta gratuíta</SignLinkText>
                </SignLink>
            </Container>
        </Background>
    );
}
