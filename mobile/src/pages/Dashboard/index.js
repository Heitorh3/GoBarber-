/* eslint-disable react/prop-types */
import React from 'react';

import Icon from 'react-native-vector-icons/MaterialIcons';

import Appointment from '~/components/Appointment';
import Background from '~/components/Background';

import {Container, Title, List} from './styles';

export default function Dashboard() {
    const data = [1, 2, 3, 4, 5, 6];
    return (
        <Background>
            <Container>
                <Title>Agendametos</Title>
                <List
                    data={data}
                    keyExtractor={item => String(item)}
                    renderItem={({item}) => <Appointment data={item} />}
                />
            </Container>
        </Background>
    );
}

Dashboard.navigationOptions = {
    tabBarLabel: 'Agendametos',
    tabBarIcon: ({tintColor}) => (
        <Icon name="event" size={20} color={tintColor} />
    ),
};
