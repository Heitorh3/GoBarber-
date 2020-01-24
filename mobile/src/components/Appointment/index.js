import React, {useMemo} from 'react';
import PropTypes from 'prop-types';

import {parseISO, formatRelative} from 'date-fns';
import pt from 'date-fns/locale/pt';

import {TouchableOpacity} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';
import {Container, Left, Avatar, Info, Name, Time} from './styles';

export default function Appointment({data, onCancel}) {
    const dateParse = useMemo(() => {
        return formatRelative(parseISO(data.date), new Date(), {
            locale: pt,
            addSufix: true,
        });
    }, [data.date]);

    return (
        <Container past={data.past}>
            <Left>
                <Avatar
                    source={{
                        uri: data.provider.avatar
                            ? data.provider.avatar.url
                            : `https://api.adorable.io/avatar/50/${data.provider.name}.png`,
                    }}
                />
                <Info>
                    <Name>{data.provider.name}</Name>
                    <Time>{dateParse}</Time>
                </Info>
            </Left>
            {data.cancelable && !data.canceled_at && (
                <TouchableOpacity onPress={onCancel}>
                    <Icon name="event-busy" size={20} color="#F64C75" />
                </TouchableOpacity>
            )}
        </Container>
    );
}

Appointment.propTypes = {
    data: PropTypes.objectOf(PropTypes.object),
    onCancel: PropTypes.func.isRequired,
};

Appointment.defaultProps = {
    data: {},
};
