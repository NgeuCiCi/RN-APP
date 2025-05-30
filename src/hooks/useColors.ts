import { useMemo } from 'react';
import Colors from '../assets/colors';
import Images from '../assets/images';
import Svgs from '../assets/svg';

export const useColors = () => {
    return useMemo(() => Colors, []);
};
export const useImages = () => {
    return useMemo(() => Images, []);
};
export const useSvgs = () => {
    return useMemo(() => Svgs, []);
};
