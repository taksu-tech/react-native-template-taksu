import { StackNavigationProp } from '@react-navigation/stack';
import { observer } from 'mobx-react-lite';
import React, { useContext, useEffect } from 'react';
import { StatusBar, StyleSheet, View } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { ms } from 'react-native-size-matters';
import { RootStoreContext } from '../../mobx';
import { RootStackParamList } from '../../utils/Navigation';
import { useTheme } from '../../utils/themeConfig';

interface Props {
    navigation: StackNavigationProp<RootStackParamList, 'Splashscreen'>;
}

const SplashScreen = (props: Props) => {
    const theme = useTheme();
    const store = useContext(RootStoreContext);

    useEffect(() => {
        if (store.storeLoaded) {
            setTimeout(() => {
                props.navigation.replace('Dashboard');
            }, 3000);
        }
    }, [store.storeLoaded]);

    return (
        <>
            <StatusBar barStyle="light-content" backgroundColor={theme.primaryColor} />
            <View style={[styles.container, { backgroundColor: theme.backgroundColor }]}>
                <Animatable.Image
                    useNativeDriver
                    animation="fadeInUp"
                    duration={400}
                    delay={200}
                    source={require('../../images/logo.png')}
                    resizeMode="contain"
                />
            </View>
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    logo: {
        width: ms(400),
        height: ms(200),
    },
});

export default observer(SplashScreen);
