import { memo } from 'react';
import Svg, { Circle, G, Path } from 'react-native-svg';
import { _SvgProps } from '../../components/common/CSvg';
import { SVG_SIZE_DEFAULT, Types } from '../../constants';

function SvgComponent({ height, width, color }: Types.SvgComponentProps) {
    return (
        <Svg viewBox={'0 0 20 20'} width={width || SVG_SIZE_DEFAULT} height={height || SVG_SIZE_DEFAULT}>
            <G data-name="Group 15455">
                <G data-name="download (44)">
                    <Path data-name="Path 25524" d="M20 20V0H0v20Z" fill="none" />
                    <G data-name="Group 15408" transform="translate(1.667 1.667)" fill={color}>
                        <Circle data-name="Ellipse 1712" cx={8.333} cy={8.333} r={8.333} opacity={0.35} />
                        <Path
                            data-name="Path 25525"
                            d="M11.368 11.763a.723.723 0 0 1-1.24.492l-3.19-3.268a1.046 1.046 0 0 1 .025-1.485l3.299-3.158a.723.723 0 0 1 1.223.534Z"
                        />
                        <Path data-name="Rectangle 4682" d="m15.589 10.063-6.499-.11.057-3.333 6.499.11z" />
                        <Circle
                            data-name="Ellipse 1713"
                            cx={1.667}
                            cy={1.667}
                            r={1.667}
                            transform="rotate(-180 8.67 4.973)"
                        />
                    </G>
                </G>
            </G>
        </Svg>
    );
}

const Memo = memo(SvgComponent);
export default Memo;
