import { Dimensions, PixelRatio, Platform } from 'react-native';
import ExtraDimensions from 'react-native-extra-dimensions-android';
import {
    heightPercentageToDP,
    listenOrientationChange,
    removeOrientationListener,
    widthPercentageToDP,
} from 'react-native-responsive-screen';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;
const fullHeight = ExtraDimensions.get('REAL_WINDOW_HEIGHT') - ExtraDimensions.get('STATUS_BAR_HEIGHT');
const statusBarHeight = Platform.select({
    android: ExtraDimensions.get('STATUS_BAR_HEIGHT') as number,
    ios: 0,
});
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

const { w, h } = {
    w: (num: number) => widthPercentageToDP((num / screenWidth) * 100),
    h: (num: number) => heightPercentageToDP((num / screenHeight) * 100),
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

export {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
    w as sw,
    h as sh,
    listenOrientationChange,
    removeOrientationListener,
    isTablet,
    screenWidth,
    screenHeight,
    fullHeight,
    statusBarHeight,
    ratio,
};
