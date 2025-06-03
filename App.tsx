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
            <ToastProvider>
                <NavigationContainer>
                    <ModalProvider>
                        <TabNav />
                    </ModalProvider>
                </NavigationContainer>
                <Toast
                    config={{
                        customToast: ({ text1, text2, props }) => (
                            <View
                                style={{
                                    backgroundColor: props.backgroundColor,
                                    padding: 12,
                                    borderRadius: 8,
                                    marginHorizontal: 16,
                                    alignSelf: props.alignItems,
                                    minWidth: 150,
                                }}>
                                <Text style={{ color: '#fff', fontSize: 20, fontWeight: '800', marginBottom: 6 }}>
                                    {text1}
                                </Text>
                                <Text style={{ color: '#fff', fontSize: 20 }}>{text2}</Text>
                            </View>
                        ),
                    }}
                />
            </ToastProvider>
        </RootSiblingParent>
    );
}
export default App;
