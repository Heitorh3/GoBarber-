import React, {useMemo} from 'react';
import {TouchableOpacity} from 'react-native';

import {formatRelative, parseISO} from 'date-fns';
import pt from 'date-fns/locale/pt';

import Icon from 'react-native-vector-icons/MaterialIcons';

import Background from '~/components/Background';

import {Container, Avatar, Name, Time, SubmitButton} from './styles';

export default function Confirme({navigation}) {
    const provider = navigation.getParam('provider');
    const time = navigation.getParam('time');

    const timeFormated = useMemo(() => {
        formatRelative(parseISO(time), new Date(), {locale: pt});
    }, [time]);

    return (
        <Background>
            <Container>
                <Avatar
                    source={{
                        uri: provider.avatar
                            ? provider.avatar.url
                            : `https://api.adorable.io/avatar/50/${provider.name}.png`,
                    }}
                />
                <Name>{provider.name}</Name>
                <Time>{timeFormated}</Time>

                <SubmitButton onPress={() => {}}>
                    Confimar agendamento
                </SubmitButton>
            </Container>
        </Background>
    );
}

Confirme.navigationOptions = ({navigation}) => ({
    headerTitle: 'Confirmar agendamento',
    headerLeft: () => (
        // eslint-disable-next-line no-unused-expressions
        <TouchableOpacity
            onPress={() => {
                navigation.goBack();
            }}>
            <Icon name="chevron-left" size={20} color="#FFF" />
        </TouchableOpacity>
    ),
});
