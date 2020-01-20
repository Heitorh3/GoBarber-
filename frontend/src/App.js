import React from 'react';
import {PersistGate} from 'redux-persist/es/integration/react';

import {ToastContainer} from 'react-toastify';

import {Provider} from 'react-redux';
import {Router} from 'react-router-dom';

import '~/config/ReactotronConfig';
import GlobalStyle from '~/styles/global';

import Routes from './routes';
import history from './services/history';

import {store, persistor} from '~/store';

function App() {
    return (
        <Provider store={store}>
            <PersistGate persistor={persistor}>
                <Router history={history}>
                    <Routes />
                    <ToastContainer autoClose={3000} />
                    <GlobalStyle />
                </Router>
            </PersistGate>
        </Provider>
    );
}

export default App;
