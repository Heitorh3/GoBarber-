import {createAppContainer, createSwitchNavigator} from 'react-navigation';

import SignIn from './pages/SignIn';
import SingUp from './pages/SingUp';

export default createAppContainer(
    createSwitchNavigator({
        SignIn,
        SingUp,
    })
);
