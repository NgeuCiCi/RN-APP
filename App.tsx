import { NavigationContainer } from '@react-navigation/native';
import { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import 'react-native-gesture-handler';
import { RootSiblingParent } from 'react-native-root-siblings';
import Toast from 'react-native-toast-message';
import './src/lib/i18n/index';
import { initI18n } from './src/lib/i18n/index';
import { TabNav, DrawerNav } from './src/navigators';
import { ToastProvider } from './src/providers/ToastProvider';
import { ModalProvider } from './src/providers/ModalProvider';
import { SafeAreaProvider } from 'react-native-safe-area-context';

function App(): JSX.Element {
    const [isI18nReady, setI18nReady] = useState(false);

    useEffect(() => {
        const bootstrap = async () => {
            await initI18n();
            setI18nReady(true);
        };
        bootstrap();
    }, []);

    if (!isI18nReady)
        return (
            <View>
                <Text>123</Text>
            </View>
        );

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
