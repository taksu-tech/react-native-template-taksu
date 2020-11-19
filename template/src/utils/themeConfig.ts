import { createTheming, ThemingType } from '@callstack/react-theme-provider';
import { StyleProp, TextStyle } from 'react-native';
import { ms } from 'react-native-size-matters';

export type Theme = {
    primaryColor: string;
    secondaryColor: string;
    accentColor: string;
    backgroundColor: string;
    buttonHeight: number;
    roundness: number;
    text: {
        title: StyleProp<TextStyle>;
        subtitle: StyleProp<TextStyle>;
        buttonLabel: StyleProp<TextStyle>;
        description: StyleProp<TextStyle>;
    };
};

export const color = {
    PRIMARY: '#43bb83',
    SECONDARY: '#0f4e5c',
    ACCENT: '#f6cb64',

    GREY_LIGHT: '#d8e0de',
    GREY_DARK: '#667072',
    GREY_1: '#6c929a',
    GREY_2: '#80b0b5',
    GREY_3: '#80b0b5',
    GREEN_LIGHT: '#2f8f75',
    GREEN_DARK: '#2d676c',

    DARK: '#2a2a2a',
    BLACK: '#000000',
    WHITE: '#ffffff',
};

export const themes: { [key: string]: Theme } = {
    default: {
        primaryColor: color.PRIMARY,
        secondaryColor: color.SECONDARY,
        accentColor: color.ACCENT,
        backgroundColor: color.WHITE,
        buttonHeight: ms(50),
        roundness: ms(8),
        text: {
            title: {
                fontSize: ms(24),
                color: color.WHITE,
                fontWeight: '700',
                fontFamily: 'Roboto-Bold',
            },
            subtitle: {
                fontSize: ms(18),
                color: '#353A50',
                fontWeight: '700',
            },
            buttonLabel: {
                fontSize: ms(16),
                color: '#353A50',
                fontWeight: '700',
            },
            description: {
                fontSize: ms(14),
                color: '#666666',
            },
        },
    },
};

const { ThemeProvider, useTheme }: ThemingType<Theme> = createTheming(themes.default);

export { ThemeProvider, useTheme };
