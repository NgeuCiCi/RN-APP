import { useTheme } from '@/theme';
import { NavigationContainer } from '@react-navigation/native';
import { useEffect, useState } from 'react';
import { View } from 'react-native';
import FastImage from 'react-native-fast-image';
import 'react-native-gesture-handler';
import { MMKV } from 'react-native-mmkv';
import { RESULTS } from 'react-native-permissions';
import { RootSiblingParent } from 'react-native-root-siblings';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { scale, verticalScale } from 'react-native-size-matters';
import { CMoving } from './components';
import { useCheckPhotoPermission } from './hooks/useCheckPhotoPermission';
import { initI18n } from './lib/i18n';
import './lib/i18n/index';
import { TabNav } from './navigators';
export const storage = new MMKV();

function App(): JSX.Element {
    const [isI18nReady, setI18nReady] = useState(false);
    const [isIsWelcomeReady, setIsWelcomeReady] = useState(false);
    const {
        Images: { Ami2 },
        Styles: { rowCenter },
    } = useTheme();
    const { permissionStatus, checkPermission, requestPermission, openSettings } = useCheckPhotoPermission();
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        const bootstrap = async () => {
            await initI18n();

            setI18nReady(true);
        };
        bootstrap();
    }, []);

    useEffect(() => {
        if (permissionStatus === RESULTS.DENIED || permissionStatus === RESULTS.BLOCKED) {
            setShowModal(true);
        } else {
            setShowModal(false);
        }
    }, [permissionStatus]);

    const handleOnFinish = () => {
        setIsWelcomeReady(true);
    };

    if (!isI18nReady || !isIsWelcomeReady) {
        return (
            <View style={[rowCenter, { flex: 1 }]}>
                <View style={[{ flex: 1, paddingHorizontal: '10%' }]}>
                    <CMoving
                        // directionStart={'right'}
                        // positionComp={'top'}
                        // duration={10000}
                        cmp={
                            <FastImage
                                source={Ami2}
                                style={{ width: scale(150), height: verticalScale(150) }}
                                resizeMode={'contain'}
                            />
                        }
                        size={verticalScale(150)}
                        onFinish={handleOnFinish}
                    />
                </View>
            </View>
        );
    }

    return (
        <RootSiblingParent>
            <SafeAreaProvider>
                <NavigationContainer>
                    <TabNav />
                    {/* <CPermissionModalModal
                            visible={showModal}
                            blocked={permissionStatus === RESULTS.BLOCKED}
                            onRequest={async () => {
                                const result = await requestPermission();
                                if (result === RESULTS.GRANTED) setShowModal(false);
                            }}
                            onOpenSettings={() => {
                                openSettings();
                            }}
                        /> */}
                </NavigationContainer>
            </SafeAreaProvider>
        </RootSiblingParent>
    );
}
export default App;
