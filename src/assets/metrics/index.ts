import { TextStyle } from 'react-native';
import { scale, verticalScale } from 'react-native-size-matters';
import { getDeviceInfo } from '../../utils/Utils';
const { isTablet } = getDeviceInfo();

const spacingHorizontalUnit = scale(4);
const spacingVerticaltUnit = verticalScale(4);

export const spacingHorizontal = {
    xs: spacingHorizontalUnit * 1,
    sm: spacingHorizontalUnit * 2,
    md: spacingHorizontalUnit * 3,
    lg: spacingHorizontalUnit * 4,
    xl: spacingHorizontalUnit * 8,
    xxl: spacingHorizontalUnit * 12,
};

export const spacingVertical = {
    xs: spacingVerticaltUnit * 1,
    sm: spacingVerticaltUnit * 2,
    md: spacingVerticaltUnit * 3,
    lg: spacingVerticaltUnit * 4,
    xl: spacingVerticaltUnit * 8,
    xxl: spacingVerticaltUnit * 12,
};
export const radius = {
    none: 0,
    xs: spacingHorizontalUnit * 0.5,
    sm: spacingHorizontalUnit * 1,
    md: spacingHorizontalUnit * 2,
    lg: spacingHorizontalUnit * 4,
    xl: spacingHorizontalUnit * 6,
    xxl: 9999,
};

export const fontSize = {
    xs: 12,
    sm: 14,
    md: 16,
    lg: 18,
    xl: 20,
    xxl: 24,
};

export const fontWeight: Record<string, TextStyle['fontWeight']> = {
    xs: '400',
    sm: '400',
    md: '500',
    lg: '700',
    xl: '800',
    xxl: '900',
};

export const iconSize = {
    xs: 16,
    sm: 20,
    md: 24,
    lg: 28,
    xl: 32,
    xxl: 48,
};

const Metrics = {
    radius,
    fontSize,
    fontWeight,
    iconSize,
    spacingVertical,
    spacingHorizontal,
};

export default Metrics;
