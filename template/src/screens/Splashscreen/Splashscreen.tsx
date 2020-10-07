import { StackNavigationProp } from '@react-navigation/stack';
import React, { useEffect } from 'react';
import { StatusBar, StyleSheet, View } from 'react-native';
import * as Animatable from 'react-native-animatable';
import color from '../../constants/color';
import { sh, sw } from '../../utils/dimensions';
import { RootStackParamList } from '../../utils/Navigation';

interface Props {
    navigation: StackNavigationProp<RootStackParamList, 'Splashscreen'>;
}

const Splashscreen = (props: Props) => {
    useEffect(() => {
        setTimeout(() => {
            props.navigation.replace('Dashboard');
        }, 3000);
    }, []);

    return (
        <>
            <StatusBar barStyle="dark-content" />
            <View style={styles.container}>
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
        backgroundColor: color.PRIMARY,
    },
    logo: {
        width: sw(400),
        height: sh(200),
    },
});

export default Splashscreen;
