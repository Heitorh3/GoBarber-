import React, {useRef} from 'react';

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
    const passwordRef = useRef();

    function handleSubmit() {}

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
                        returnKeyType="next"
                        onSubmitEditing={() => {
                            passwordRef.current.focus();
                        }}
                    />

                    <FormInput
                        icon="lock-outline"
                        secureTextEntry
                        placeholder="Digite a sua senha"
                        returnKeyType="send"
                        onSubmitEditing={handleSubmit}
                        ref={passwordRef}
                    />
                    <SubmitButton onPress={handleSubmit}>Acessar</SubmitButton>
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
