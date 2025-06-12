/**
 * @format
 */
import { AppRegistry } from 'react-native';
import 'react-native-gesture-handler';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { name as appName } from './app.json';
import App, { storage } from './src/App';
import { persistor, store } from './src/store/index';
import { ThemeProvider } from './src/theme';
import { ModalProvider } from './src/providers/ModalProvider';
import { RootSiblingParent } from 'react-native-root-siblings';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const Root = () => (
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <RootSiblingParent>
                <SafeAreaProvider>
                    <ThemeProvider storage={storage}>
                        <ModalProvider>
                            <App />
                        </ModalProvider>
                    </ThemeProvider>
                </SafeAreaProvider>
            </RootSiblingParent>
        </PersistGate>
    </Provider>
);

AppRegistry.registerComponent(appName, () => Root);
