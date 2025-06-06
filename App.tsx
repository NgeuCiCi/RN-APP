import { NavigationContainer } from '@react-navigation/native';
import { FastImage } from '@src/lib';
import { useEffect, useState } from 'react';
import { View } from 'react-native';
import 'react-native-gesture-handler';
import { RootSiblingParent } from 'react-native-root-siblings';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { scale, verticalScale } from 'react-native-size-matters';
import { CMoving } from './src/components';
import { useGetAssets } from './src/hooks';
import './src/lib/i18n/index';
import { initI18n } from './src/lib/i18n/index';
import { TabNav } from './src/navigators';
import { ModalProvider } from './src/providers/ModalProvider';

function App(): JSX.Element {
    const [isI18nReady, setI18nReady] = useState(false);
    const [isIsWelcomeReady, setIsWelcomeReady] = useState(false);
    const {
        Images: { Ami, Ami2 },
        Styles: { rowCenter },
        Metrics: { spacingHorizontal },
    } = useGetAssets();

    useEffect(() => {
        const bootstrap = async () => {
            await initI18n();

            setI18nReady(true);
        };
        bootstrap();
    }, []);

    const handleOnFinish = () => {
        setIsWelcomeReady(true);
    };

    if (!isI18nReady || !isIsWelcomeReady) {
        return (
            <View style={[rowCenter, { flex: 1 }]}>
                <View style={[{ flex: 1, paddingHorizontal: '10%' }]}>
                    <CMoving
                        directionStart={'right'}
                        positionComp={'top'}
                        duration={10000}
                        cmp={
                            <FastImage
                                source={Ami2}
                                style={{ width: scale(150), height: verticalScale(150) }}
                                resizeMode={'contain'}
                            />
                        }
                        // cmp={<FastImage source={Ami2} style={{ width: 150, height: 150 }} resizeMode={'contain'} />}
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
                    <ModalProvider>
                        <TabNav />
                    </ModalProvider>
                </NavigationContainer>
            </SafeAreaProvider>
        </RootSiblingParent>
    );
}
export default App;
