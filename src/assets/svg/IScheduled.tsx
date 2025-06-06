import { memo } from 'react';
import Svg, { Circle, G, Path } from 'react-native-svg';
import { _SvgProps } from '../../components/common/CSvg';
import { SVG_SIZE_DEFAULT, Types } from '../../constants';

function SvgComponent({ height, width, color }: Types.SvgComponentProps) {
    return (
        <Svg viewBox={'0 0 256 256'} width={width || SVG_SIZE_DEFAULT} height={height || SVG_SIZE_DEFAULT} >
            <Path d="M0 256V0h256v256z" fill="none" />
            <G transform="scale(10.66667)" fill={color}>
                <Path d="M18 21H6a3 3 0 0 1-3-3V7h18v11a3 3 0 0 1-3 3z" opacity={0.5} />
                <Path d="M18 3H6a3 3 0 0 0-3 3v1h18V6a3 3 0 0 0-3-3z" />
                <Circle cx={14} cy={18} r={1} />
                <Circle cx={10} cy={18} r={1} />
                <Circle cx={6} cy={18} r={1} />
                <Circle cx={6} cy={14} r={1} />
                <Circle cx={10} cy={14} r={1} />
                <Circle cx={14} cy={14} r={1} />
                <Circle cx={18} cy={14} r={1} />
                <Circle cx={18} cy={10} r={1} />
                <Circle cx={14} cy={10} r={1} />
                <Circle cx={10} cy={10} r={1} />
            </G>
        </Svg>
    );
};

const Memo = memo(SvgComponent);
export default Memo;
