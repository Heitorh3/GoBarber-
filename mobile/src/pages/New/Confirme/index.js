import React from 'react';

import Background from '~/components/Background';
// import { Container } from './styles';

export default function Confirme() {
    return <Background />;
}

Confirme.navigationOptions = ({navigation}) => ({
    title: 'Confirmar agendamento',
});
