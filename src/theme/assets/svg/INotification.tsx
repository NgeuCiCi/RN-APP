import { memo } from 'react';
import Svg, { G, Path } from 'react-native-svg';
import { SVG_SIZE_DEFAULT, Types } from '../../../constants';

function SvgComponent({ height, width, color }: Types.SvgComponentProps) {
    return (
        <Svg
            data-name="download (26)"
            viewBox={'0 0 20 20'}
            width={width || SVG_SIZE_DEFAULT}
            height={height || SVG_SIZE_DEFAULT}>
            <Path data-name="Path 5860" d="M0 20V0h20v20Z" fill="none" />
            <G data-name="Group 15166" fill={color}>
                <Path data-name="Path 5861" d="M7.5 16.666a2.5 2.5 0 0 0 5 0Z" />
                <Path
                    data-name="Path 5862"
                    d="M15.834 8.889V7.745A6 6 0 0 0 10.18 1.67 5.832 5.832 0 0 0 4.168 7.5v1.389a5.832 5.832 0 0 1-1.167 3.5l-.958 1.277a1.874 1.874 0 0 0-.375 1.125 1.875 1.875 0 0 0 1.875 1.875h12.916a1.875 1.875 0 0 0 1.875-1.874 1.874 1.874 0 0 0-.375-1.125l-.958-1.277a5.834 5.834 0 0 1-1.167-3.501Z"
                    opacity={0.9}
                />
            </G>
        </Svg>
    );
}

const Memo = memo(SvgComponent);
export default Memo;
