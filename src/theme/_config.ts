import type { ThemeConfiguration } from '@/theme/types/config';
import { DarkTheme, DefaultTheme } from '@react-navigation/native';

export const enum Variant {
  DARK = 'dark',
}

export const AdahubColors = {
  primary: '#F17961',
  secondary: '#1E276D',
};

const colorsLight = {
  svgActive: '#feb729',
  svgPrimary: '#2d353d',
  background: '#f0f2f5',
  black: '#000000',
  blue50: '#f0f2f5',
  gray100: '#DFDFDF',
  gray200: '#A1A1A1',
  gray400: '#4D4D4D',
  gray50: '#EFEFEF',
  gray800: '#303030',
  lightUcallBlueBg: '#E1E8FF',
  primary: AdahubColors.secondary,
  purple100: '#E1E1EF',
  purple50: '#1B1A23',
  purple500: '#44427D',
  red500: '#C13333',
  secondary: AdahubColors.primary,
  skeleton: '#A1A1A1',
  white: '#FFFFFF',
} as const;

const colorsDark = {
  svgActive: '#feb729',
  svgPrimary: '#2d353d',
  blue50: '#f0f2f5',
  gray100: '#000000',
  gray200: '#BABABA',
  gray400: '#969696',
  gray50: '#EFEFEF',
  gray800: '#E0E0E0',
  primary: AdahubColors.secondary,
  purple100: '#252732',
  purple50: '#1B1A23',
  purple500: '#A6A4F0',
  red500: '#C13333',
  skeleton: '#303030',
  white: '#FFFFFF',
} as const;

const sizes = [4, 8, 12, 16, 20, 24, 32, 36, 40, 44, 48, 56, 64, 80] as const;

export const config = {
  backgrounds: colorsLight,
  borders: {
    colors: colorsLight,
    radius: [4, 16],
    widths: [1, 2],
  },
  colors: colorsLight,
  fonts: {
    colors: colorsLight,
    sizes,
  },
  gutters: sizes,
  navigationColors: {
    ...DefaultTheme.colors,
    background: colorsLight.blue50,
    card: colorsLight.gray50,
  },
  variants: {
    dark: {
      backgrounds: colorsDark,
      borders: {
        colors: colorsDark,
      },
      colors: colorsDark,
      fonts: {
        colors: colorsDark,
      },
      navigationColors: {
        ...DarkTheme.colors,
        background: colorsDark.purple50,
        card: colorsDark.purple50,
      },
    },
  },
} as const satisfies ThemeConfiguration;
