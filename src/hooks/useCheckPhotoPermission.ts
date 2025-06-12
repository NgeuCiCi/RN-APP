import { useEffect, useState } from 'react';
import { Platform, Linking } from 'react-native';
import { check, request, PERMISSIONS, RESULTS, Permission } from 'react-native-permissions';
type ResultType = typeof RESULTS[keyof typeof RESULTS];

const getPhotoPermission = (): Permission => {
    if (Platform.OS === 'ios') {
        return PERMISSIONS.IOS.PHOTO_LIBRARY;
    }

    const sdkVersion = Platform.Version as number;

    return sdkVersion >= 33 ? PERMISSIONS.ANDROID.READ_MEDIA_IMAGES : PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE;
};

export const useCheckPhotoPermission = () => {
    const [permissionStatus, setPermissionStatus] = useState<ResultType | null>(null);

    const checkPermission = async () => {
        const permission = getPhotoPermission();
        const result = await check(permission);
        setPermissionStatus(result);
        return result;
    };

    const requestPermission = async () => {
        const permission = getPhotoPermission();
        const result = await request(permission);
        setPermissionStatus(result);
        return result;
    };

    const openSettings = () => {
        Linking.openSettings();
    };

    useEffect(() => {
        checkPermission();
    }, []);

    return {
        permissionStatus,
        checkPermission,
        requestPermission,
        openSettings,
    };
};
