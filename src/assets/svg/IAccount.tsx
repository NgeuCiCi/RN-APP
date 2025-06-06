import { memo } from 'react';
import Svg, { Circle, Defs, G, LinearGradient, Path, Stop } from 'react-native-svg';
import { _SvgProps } from '../../components/common/CSvg';
import { SVG_SIZE_DEFAULT, Types } from '../../constants';

function SvgComponent({ height, width, color }: Types.SvgComponentProps) {
    return (
        <Svg
            data-name="download (10)"
            width={width || SVG_SIZE_DEFAULT}
            height={height || SVG_SIZE_DEFAULT}
            viewBox={'0 0 20 20'}>
            <Defs>
                <LinearGradient id="a" x1={0.5} x2={0.5} y2={1} gradientUnits="objectBoundingBox">
                    <Stop offset={0} stopColor={color} />
                    <Stop offset={1} stopColor={color} />
                </LinearGradient>
            </Defs>
            <Path data-name="Path 5670" d="M0 20V0h20v20Z" fill="none" />
            <G data-name="Group 15106" transform="translate(1.667 1.667)" fill="url(#a)">
                <Circle data-name="Ellipse 6" cx={8.333} cy={8.333} r={8.333} opacity={0.35} />
                <Circle data-name="Ellipse 7" cx={2.5} cy={2.5} r={2.5} transform="translate(5.833 3.333)" />
                <Path
                    data-name="Path 5671"
                    d="M13.235 11.487A2.076 2.076 0 0 0 11.249 10H5.416a2.076 2.076 0 0 0-1.986 1.487 5.824 5.824 0 0 0 9.805 0Z"
                />
            </G>
        </Svg>
    );
}

const Memo = memo(SvgComponent);
export default Memo;
