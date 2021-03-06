import React from 'react';

import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';

import {createStackNavigator} from 'react-navigation-stack';

import Icon from 'react-native-vector-icons/MaterialIcons';

import SignIn from './pages/SignIn';
import SingUp from './pages/SingUp';

import SelectProvider from '~/pages/New/SelectProvider';
import SelectDateTime from '~/pages/New/SelectDateTime';
import Confirm from '~/pages/New/Confirme';

import Dashboard from '~/pages/Dashboard';
import Profile from '~/pages/Profile';

export default (signedIn = false) =>
    createAppContainer(
        createSwitchNavigator(
            {
                Sign: createSwitchNavigator({
                    SignIn,
                    SingUp,
                }),
                App: createBottomTabNavigator(
                    {
                        Dashboard,
                        New: {
                            screen: createStackNavigator(
                                {
                                    SelectProvider,
                                    SelectDateTime,
                                    Confirm,
                                },
                                {
                                    defaultNavigationOptions: {
                                        headerTransparent: true,
                                        headerTintColor: '#fff',
                                        headerLeftContainerStyle: {
                                            marginLeft: 20,
                                        },
                                    },
                                }
                            ),
                            navigationOptions: {
                                tabBarVisible: false,
                                tabBarLabel: 'Agendar',
                                tabBarIcon: (
                                    <Icon
                                        name="add-circle-outline"
                                        size={20}
                                        color="rgba(255,255,255,0.6)"
                                    />
                                ),
                            },
                        },
                        Profile,
                    },
                    {
                        tabBarOptions: {
                            keyboardHidesTabBar: true,
                            activeTintColor: '#FFF',
                            inactiveTintColor: 'rgba(255,255,255,0.6)',
                            style: {
                                backgroundColor: '#8D41A8',
                            },
                        },
                    }
                ),
            },
            {
                initialRouteName: signedIn ? 'App' : 'Sign',
            }
        )
    );
