import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { AppRegistry, LogBox } from 'react-native';
import 'react-native-gesture-handler';
import { enableScreens } from 'react-native-screens';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { name as appName } from '../app.json';
import { persistor, store } from './redux';
import RootStack from './utils/Navigation';

// disable yellow box
LogBox.ignoreAllLogs(true);

// react navigation optimization
enableScreens();

// app container
const AppContainer = () => {
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <NavigationContainer>
                    <RootStack />
                </NavigationContainer>
            </PersistGate>
        </Provider>
    );
};

// start render screen
AppRegistry.registerComponent(appName, () => AppContainer);
