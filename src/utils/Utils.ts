import _ from 'lodash';
import { Dimensions } from 'react-native';
import DeviceInfo from 'react-native-device-info';
import tinycolor from 'tinycolor2';
import { NAME_BREAKPOINT, Types } from '../constants';
import { iconSize } from '../theme/assets/metrics';

export const getScreen = () => {
    const scale = Dimensions.get('screen').scale / Dimensions.get('window').scale;
    return {
        screenHeight: Dimensions.get('window').height * scale,
        screenWidth: Dimensions.get('window').width * scale,
    };
};
export const isTablet = () => DeviceInfo.isTablet();

export const getDeviceInfo = () => {
    return { version: DeviceInfo.getVersion(), isTablet: DeviceInfo.isTablet(), deviceId: DeviceInfo.getDeviceId };
};

export const getFontSizeByScreen = (type: 'height' | 'width' = 'width') => {
    const { isTablet } = getDeviceInfo();
    const { screenHeight, screenWidth } = getScreen();
    const scale = isTablet ? 0.02 : 0.04;
    const px = type == 'width' ? screenWidth : screenHeight;

    return scale * px;
};
export const scaleSize = (value: Types.size) => {
    const { isTablet } = getDeviceInfo();
    let size = isNumber(value) ? value : iconSize[value];
    return isTablet ? size * 3 : size;
};

export const isEmpty = (obj) => {
    return _.isEmpty(obj);
};

export const isEqual = (obj) => {
    return _.isEqual(obj);
};

export function isArray(value, isNotEmpty?) {
    if (Array.isArray(value)) {
        if (isNotEmpty) {
            const minLength = (isNumber(isNotEmpty) && parseInt(isNotEmpty)) || 0;
            return value.length > minLength;
        } else {
            return true;
        }
    }
    return false;
}
export function isNumber(value) {
    if (typeof value === 'number') {
        return true;
    }
    if (value && value.toString().split('.') === 2 && typeof parseFloat(value) === 'number') {
        return true;
    }
    if (isNumeric(value)) {
        return true;
    }
    return false;
}

export function isNumeric(str) {
    if (!str) {
        return false;
    }
    if (str.toString().match(/^[0-9]+$/) === null) {
        return false;
    }
    return true;
}

export const adjustColor = (color: string, percentage: number = 0) => {
    return percentage > 0
        ? tinycolor(color)
            .darken(percentage * 100)
            .toString()
        : tinycolor(color)
            .lighten(Math.abs(percentage) * 100)
            .toString();
};

export function getAdjacentBreakpoint(current: Types.size): Types.size[] {
    const index = NAME_BREAKPOINT.indexOf(current);
    let indexStart, indexEnd;
    if (index === -1) {
        return [current, current];
    }

    indexStart = index - 1 > 0 ? index - 1 : 0;
    indexEnd = index + 1 < NAME_BREAKPOINT.length - 1 ? index + 1 : NAME_BREAKPOINT.length - 1;

    return [NAME_BREAKPOINT[indexStart], NAME_BREAKPOINT[indexEnd]];
}
