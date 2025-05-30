import React from 'react';
import { SvgProps } from 'react-native-svg';
import { useColors } from '../hooks';
import { TouchableOpacity } from 'react-native';

export interface _SvgProps extends SvgProps {
    size?: number;
    isActive?: boolean;
    isBackground?: boolean;
    isScale?: boolean;
    colorDarker?: string;
    onPress?: () => void;
}

const withThemedSvg = (SvgComponent: React.ComponentType<any>) => {
    return ({
        size,
        isActive = false,
        isBackground = false,
        isScale = false,
        onPress,
        ...rest
    }: _SvgProps) => {
        const { svgActive, svgActiveDarker1, svgNotActive, svgNotActiveDarker1 } = useColors();
        const color = isActive ? svgActive : svgNotActive;
        const colorDarker = isActive ? svgActiveDarker1 : svgNotActiveDarker1;
        if (!isBackground) return <SvgComponent size={size} color={color} colorDarker={colorDarker} {...rest} />;
        return (
            <TouchableOpacity
                style={{
                    borderRadius: '30%',
                    backgroundColor: 'rgba(255, 255, 255, 0.4)',
                    alignSelf: 'flex-end',
                    justifyContent: 'center',
                    alignItems: 'center',
                    padding: 8,
                }}
                activeOpacity={1}
                onPress={onPress}>
                <SvgComponent {...{ isScale, size, color, colorDarker, ...rest }} />
            </TouchableOpacity>
        );
    };
};
export default withThemedSvg;
