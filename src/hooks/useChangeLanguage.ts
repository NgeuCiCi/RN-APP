import { useDispatch } from 'react-redux';
import i18n from '../lib/i18n';
import { lang, setLanguage } from '../store/slices/setting/settingSlice';

const useChangeLanguage = () => {
    const dispatch = useDispatch();

    return (lang: lang) => {
        i18n.changeLanguage(lang);
        dispatch(setLanguage(lang));
    };
};
export default useChangeLanguage;
