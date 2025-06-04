import { FC } from 'react';
import { TouchableOpacity } from 'react-native';
import { SvgProps } from 'react-native-svg';
import { Types } from '../../assets/types';
import { SIZE_DEFAULT } from '../../constants';
import { withMemo } from '../../hoc';
import useGetAssets from '../../hooks/useGetAssets';
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
    const { size = SIZE_DEFAULT, color, adjust = 0, isActive, isBackground, isScale, onPress, ...rest } = Opts;
    const [sizeStart] = getAdjacentBreakpoint(size);
    const {
        Colors: { svgActive, svgPrimary, grayShades },
        Metrics: { iconSize, radius, spacing },
        Styles: { rowCenter },
        Svgs,
    } = useGetAssets();

    let _color = isActive ? svgActive : svgPrimary;
    _color = adjustColor(_color, adjust);

    if (color) {
        _color = color;
    }
    const _size = isNumber(size) ? size : iconSize[size as string];
    const _SVG = Svgs[svg];
    const SVG = <_SVG {...{ isScale, size: _size, color: _color, ...rest }} />;
    if (!isBackground) return <TouchableOpacity onPress={onPress}>{SVG}</TouchableOpacity>;
    return (
        <TouchableOpacity
            style={[
                rowCenter,
                {
                    backgroundColor: grayShades[1],
                    borderRadius: radius[size] || radius[SIZE_DEFAULT],
                    padding: spacing[sizeStart] || spacing[SIZE_DEFAULT],
                },
            ]}
            activeOpacity={1}
            onPress={onPress}>
            {SVG}
        </TouchableOpacity>
    );
};
export default withMemo(CSvg);
