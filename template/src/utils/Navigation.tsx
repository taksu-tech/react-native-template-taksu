import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import Dashboard from '../screens/Dashboard/Dashboard';
import Splashscreen from '../screens/Splashscreen/Splashscreen';

export type RootStackParamList = {
    Splashscreen: undefined;
    Dashboard: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

const RootStack = () => {
    return (
        <Stack.Navigator initialRouteName="Splashscreen">
            <Stack.Screen name="Splashscreen" component={Splashscreen} options={{ headerShown: false }} />
            <Stack.Screen name="Dashboard" component={Dashboard} options={{ headerShown: false }} />
        </Stack.Navigator>
    );
};

export default RootStack;
