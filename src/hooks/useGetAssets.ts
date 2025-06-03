import { useMemo } from 'react';
import Colors from '../assets/colors';
import Images from '../assets/images';
import Metrics from '../assets/metrics';
import Styles from '../assets/styles';
import Svgs from '../assets/svg';

const useGetAssets = () => useMemo(() => ({ Metrics, Styles, Svgs, Images, Colors }), []);
export default useGetAssets;
