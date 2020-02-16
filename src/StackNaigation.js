import React  from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import HomeScreen from './HomeScreen'
import RegisterUser from './RegisterUser';
import UpdateUser from './UpdateUser';
import ViewUser from './ViewUser';
import ViewAllUser from './ViewAllUser';
import DeleteUser from './DeleteUser';

const mainContainer = createStackNavigator(
    {
        HomeScreen: {
            screen: HomeScreen,
            navigationOptions: {
                title: 'HomeScreen',
                headerStyle: { backgroundColor: '#f05555' },
                headerTintColor: '#ffffff',
            },
        },
        View: {
            screen: ViewUser,
            navigationOptions: {
                title: 'View User',
                headerStyle: { backgroundColor: '#f05555' },
                headerTintColor: '#ffffff',
            },
        },
        ViewAll: {
            screen: ViewAllUser,
            navigationOptions: {
                title: 'View All User',
                headerStyle: { backgroundColor: '#f05555' },
                headerTintColor: '#ffffff',
            },
        },
        Update: {
            screen: UpdateUser,
            navigationOptions: {
                title: 'Update User',
                headerStyle: { backgroundColor: '#f05555' },
                headerTintColor: '#ffffff',
            },
        },
        Register: {
            screen: RegisterUser,
            navigationOptions: {
                title: 'Register User',
                headerStyle: { backgroundColor: '#f05555' },
                headerTintColor: '#ffffff',
            },
        },
        Delete: {
            screen: DeleteUser,
            navigationOptions: {
                title: 'Delete User',
                headerStyle: { backgroundColor: '#f05555' },
                headerTintColor: '#ffffff',
            },
        },
    },
    {
        initialRouteName: 'HomeScreen',
    }
);

const AppContainer = createAppContainer(mainContainer)
export default AppContainer