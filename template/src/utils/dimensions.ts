/* eslint @typescript-eslint/no-var-requires: 0 */

import { Dimensions, PixelRatio, Platform } from 'react-native';

const { width: screenWidth, height: screenHeight } = Dimensions.get('window');
const deviceHeight =
    Platform.OS === 'ios'
        ? screenHeight
        : require('react-native-extra-dimensions-android').get('REAL_WINDOW_HEIGHT');
const ratio = screenWidth / screenHeight;
const pixelDensity = PixelRatio.get();
const adjustedWidth = screenWidth * pixelDensity;
const adjustedHeight = screenHeight * pixelDensity;

const isTablet = () => {
    if (pixelDensity < 2 && (adjustedWidth >= 1000 || adjustedHeight >= 1000)) {
        return true;
    } else if (pixelDensity === 2 && (adjustedWidth >= 1920 || adjustedHeight >= 1920)) {
        return true;
    }

    return false;
};

export const extraPad = {
    iphoneX: {
        top: 44,
        bottom: 34,
    },
    iphone: {
        top: 20,
        bottom: 0,
    },
    android: {
        top: 0,
        bottom: 0,
    },
};

export const phoneType = () => {
    if (Platform.OS === 'ios') {
        const { height } = Dimensions.get('window');
        // iPhone X
        if (height === 812 || height === 896) {
            return 'iphoneX';
        }
        // iPhone
        return 'iphone';
    }
    // Android phone
    return 'android';
};

export const getTop = () => {
    return extraPad[phoneType()].top;
};

export const getBottom = () => {
    return extraPad[phoneType()].bottom;
};

export const offsetKeyboard = () => (Platform.OS === 'ios' ? 64 : 0);

export { isTablet, screenWidth, screenHeight, deviceHeight, ratio };
