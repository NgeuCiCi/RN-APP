import { TextStyle } from 'react-native';
import { getDeviceInfo, getScreen } from '../../utils/Utils';
const { isTablet } = getDeviceInfo();
const scale = (size: number) => (getScreen().screenWidth / (isTablet ? 2 : 1) / BASE_WIDTH) * size;
const BASE_WIDTH = 390;
const spacingUnit = scale(4);

export const spacing = {
    xs: spacingUnit * 1,
    sm: spacingUnit * 2,
    md: spacingUnit * 3,
    lg: spacingUnit * 4,
    xl: spacingUnit * 8,
    xxl: spacingUnit * 12,
};

export const radius = {
    none: 0,
    xs: spacingUnit * 0.5,
    sm: spacingUnit * 1,
    md: spacingUnit * 2,
    lg: spacingUnit * 4,
    xl: spacingUnit * 6,
    xxl: 9999,
};

export const fontSize = {
    xs: scale(12),
    sm: scale(14),
    md: scale(18),
    lg: scale(20),
    xl: scale(22),
    xxl: scale(26),
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
    xs: scale(16),
    sm: scale(20),
    md: scale(24),
    lg: scale(28),
    xl: scale(32),
    xxl: scale(36),
};

const Metrics = {
    spacing,
    radius,
    fontSize,
    fontWeight,
    iconSize,
};

export default Metrics;
