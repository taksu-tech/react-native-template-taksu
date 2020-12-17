import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { AppRegistry, LogBox } from 'react-native';
import 'react-native-gesture-handler';
import { enableScreens } from 'react-native-screens';
import { name as appName } from '../app.json';
import { rootStore, RootStoreContext } from './mobx';
import axiosConfig from './utils/axiosConfig';
import RootStack from './utils/Navigation';

// disable yellow box
LogBox.ignoreAllLogs(true);

// react navigation optimization
enableScreens();

// activated axios listener log
axiosConfig();

// app container
const AppContainer = () => {
    return (
        <RootStoreContext.Provider value={rootStore}>
            <NavigationContainer>
                <RootStack />
            </NavigationContainer>
        </RootStoreContext.Provider>
    );
};

// start render screen
AppRegistry.registerComponent(appName, () => AppContainer);
