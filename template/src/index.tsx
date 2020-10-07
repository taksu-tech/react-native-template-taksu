import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { AppRegistry, LogBox } from 'react-native';
import 'react-native-gesture-handler';
import { enableScreens } from 'react-native-screens';
import { name as appName } from '../app.json';
import RootStack from './utils/Navigation';

// disable yellow box
LogBox.ignoreAllLogs(true);

// react navigation optimization
enableScreens();

// app container
const AppContainer = () => {
    return (
        <NavigationContainer>
            <RootStack />
        </NavigationContainer>
    );
};

// start render screen
AppRegistry.registerComponent(appName, () => AppContainer);
