import * as RNLocalize from 'react-native-localize';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './languages/en.json';
import vn from './languages/vn.json';
import { getStoredState } from 'redux-persist';
import { persistConfig } from '../../store';

const getDeviceLanguage = () => {
    const locales = RNLocalize.getLocales();
    if (Array.isArray(locales)) {
        return locales[0].languageCode;
    }
    return 'en';
};
export const initI18n = async () => {
    const restoredState: any = await getStoredState(persistConfig);
    const savedLanguage = restoredState?.setting?.lang || 'en';

    await i18n.use(initReactI18next).init({
        compatibilityJSON: 'v4',
        resources: {
            en: {
                translation: en,
            },
            vn: {
                translation: vn,
            },
        },
        lng: savedLanguage,
        fallbackLng: 'en',
        keySeparator: '.',
        debug: true,
        defaultNS: 'translation',
        ns: 'translation',
        interpolation: {
            escapeValue: false,
        },
        react: {
            useSuspense: false,
        },
    });
};


export default i18n;
