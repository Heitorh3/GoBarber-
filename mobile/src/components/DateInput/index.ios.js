import React, {useState, useMemo} from 'react';
import {DatePickerIOS} from 'react-native';

import {format} from 'date-fns';
import pt from 'date-fns/locale/pt';

import Icon from 'react-native-vector-icons/MaterialIcons';

import {Container, DateButton, DateText, Picker} from './styles';

export default function DateInput({date, onChange}) {
    const [opened, setOpened] = useState(false);

    const dateFormated = useMemo(
        () => format(date, "dd 'de' MMMM 'de' yyyy", {locale: pt}),
        [date]
    );

    return (
        <Container>
            <DateButton onPress={() => setOpened(!opened)}>
                <Icon name="event" color="#FFF" size={20} />
                <DateText>{dateFormated}</DateText>
            </DateButton>
            {opened && (
                <Picker>
                    <DatePickerIOS
                        date={date}
                        onDateChange={onChange}
                        minimumDate={new Date()}
                        minuteInterval={60}
                        locale="pt"
                        mode="date"
                    />
                </Picker>
            )}
        </Container>
    );
}
