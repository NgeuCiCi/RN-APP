import { memo } from 'react';
import Svg, { Circle, G, Path } from 'react-native-svg';
import { SVG_SIZE_DEFAULT, Types } from '../../../constants';

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
                            d="M12.5 4.891a.723.723 0 0 1 1.232-.513l3.244 3.213a1.046 1.046 0 0 1 0 1.485l-3.244 3.213a.723.723 0 0 1-1.232-.513Z"
                        />
                        <Path data-name="Rectangle 4682" d="M8.333 6.667h6.499V10H8.333z" />
                        <Circle
                            data-name="Ellipse 1713"
                            cx={1.667}
                            cy={1.667}
                            r={1.667}
                            transform="translate(6.667 6.667)"
                        />
                    </G>
                </G>
            </G>
        </Svg>
    );
}

const Memo = memo(SvgComponent);
export default Memo;
