import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import Dashboard from '../screens/Dashboard/Dashboard';
import SplashScreen from '../screens/SplashScreen/SplashScreen';

export type RootStackParamList = {
    Splashscreen: undefined;
    Dashboard: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

const RootStack = () => {
    return (
        <Stack.Navigator initialRouteName="Splashscreen">
            <Stack.Screen name="Splashscreen" component={SplashScreen} options={{ headerShown: false }} />
            <Stack.Screen name="Dashboard" component={Dashboard} options={{ headerShown: false }} />
        </Stack.Navigator>
    );
};

export default RootStack;
