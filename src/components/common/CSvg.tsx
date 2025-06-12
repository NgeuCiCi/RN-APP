import { FC } from 'react';
import { TouchableOpacity } from 'react-native';
import { isTablet } from 'react-native-device-info';
import { scale, verticalScale } from 'react-native-size-matters';
import { SvgProps } from 'react-native-svg';
import { SIZE_DEFAULT, Types } from '../../constants';
import { withMemo } from '../../hoc';
import { useTheme } from '../../theme';
import { adjustColor, getAdjacentBreakpoint, isNumber } from '../../utils/Utils';

export interface _SvgProps extends SvgProps {
    isActive?: boolean;
    isBackground?: boolean;
    isScale?: boolean;
    size?: Types.size;
    adjust?: number;
    color?: string;
    onPress?: () => void;
}
interface CSvgWrapperProps extends _SvgProps {
    svg: string;
}

const CSvg: FC<CSvgWrapperProps> = ({ svg, ...Opts }) => {
    const { size = SIZE_DEFAULT, color, adjust = 0, isActive, isBackground, height, width, onPress } = Opts;
    const [sizeStart] = getAdjacentBreakpoint(size);
    const {
        Colors: { svgActive, svgPrimary },
        Metrics: { iconSize, radius, spacingHorizontal, spacingVertical },
        Styles: { rowCenter },
        Svgs,
    } = useTheme();

    let _color = isActive ? svgActive : svgPrimary;
    _color = adjustColor(_color, adjust);

    const _size = isNumber(size) ? size : iconSize[size as string];
    let _width = scale(width || _size);
    let _height = verticalScale(height || _size);
    if (isTablet()) {
        _height = _height * 0.9;
        _width = _width * 0.8;
    }

    const _SVG = Svgs[svg];

    const SVG = <_SVG {...{ height: _height, width: _width, color: color || _color }} />;
    if (!isBackground) return <TouchableOpacity onPress={onPress}>{SVG}</TouchableOpacity>;
    return (
        <TouchableOpacity
            style={[
                rowCenter,
                {
                    backgroundColor: '#e3e3e3',
                    borderRadius: radius[size] || radius[SIZE_DEFAULT],
                    paddingVertical: spacingVertical[sizeStart] || spacingVertical[SIZE_DEFAULT],
                    paddingHorizontal: spacingHorizontal[sizeStart] || spacingHorizontal[SIZE_DEFAULT],
                },
            ]}
            activeOpacity={1}
            onPress={onPress}>
            {SVG}
        </TouchableOpacity>
    );
};
export default withMemo(CSvg);
