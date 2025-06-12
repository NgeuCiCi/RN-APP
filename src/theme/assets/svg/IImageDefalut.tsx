import { memo } from 'react';
import Svg, { Circle, G, Path, Rect } from 'react-native-svg';
import { SVG_SIZE_DEFAULT, Types } from '../../../constants';

function SvgComponent({ height, width, color }: Types.SvgComponentProps) {
    return (
        <Svg
            data-name="download (64)"
            viewBox={'0 0 20 20'}
            width={width || SVG_SIZE_DEFAULT}
            height={height || SVG_SIZE_DEFAULT}>
            <Path data-name="Path 25602" d="M0 20V0h20v20Z" fill="none" />
            <G data-name="Group 15524" transform="translate(1.667 3.333)" fill={color}>
                <Rect data-name="Rectangle 4690" width={16.667} height={13.333} rx={3} opacity={0.35} />
                <Circle data-name="Ellipse 1732" cx={1.667} cy={1.667} r={1.667} transform="translate(10.833 1.667)" />
                <Path
                    data-name="Path 25603"
                    d="M1.667 10a.833.833 0 0 0 .833.833h11.667A.833.833 0 0 0 15 10a3.039 3.039 0 0 0-2.083-2.5c-.677 0-1.29.833-2.917.833-2.035 0-3.333-4.167-5-4.167S1.667 7.802 1.667 10Z"
                />
            </G>
        </Svg>
    );
}

const Memo = memo(SvgComponent);
export default Memo;
