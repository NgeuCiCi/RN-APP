import { Dimensions } from 'react-native';
import DeviceInfo from 'react-native-device-info';
import _ from 'lodash';

export const getScreenHeight = () => {
    const scale = Dimensions.get('screen').scale / Dimensions.get('window').scale;
    const curHeight = Dimensions.get('window').height;
    return curHeight * scale;
};

export const getScreenWidth = () => {
    const scale = Dimensions.get('screen').scale / Dimensions.get('window').scale;
    const curWidth = Dimensions.get('window').width;
    return curWidth * scale;
};

export const getDeviceInfo = () => {
    return { version: DeviceInfo.getVersion(), isTablet: DeviceInfo.isTablet(), deviceId: DeviceInfo.getDeviceId };
};

export const getFontSizeByScreen = (type: 'height' | 'width' = 'width') => {
    const { isTablet } = getDeviceInfo();
    const scale = isTablet ? 0.02 : 0.04;
    const px = type == 'width' ? getScreenWidth() : getScreenHeight();

    return scale * px;
};
export const scaleSize = (value: number) => {
    const { isTablet } = getDeviceInfo();

    return isTablet ? value * 3 : value;
};

export const isEmpty = (obj) => {
    return _.isEmpty(obj);
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
    if (typeof value === 'number') { return true; }
    if (value && value.toString().split('.') === 2 && typeof parseFloat(value) === 'number') { return true; }
    if (isNumeric(value)) { return true; }
    return false;
}

export const removeSameObject = (data, key) => {
    return data.filter((v, i, a) => a.findIndex(t => (t[key] === v[key])) === i)
}

export function isNumeric(str) {
    if (!str) { return false; }
    if (str.toString().match(/^[0-9]+$/) === null) { return false; }
    return true;
}