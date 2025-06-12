import { memo } from 'react';
import Svg, { G, Path } from 'react-native-svg';
import { SVG_SIZE_DEFAULT, Types } from '../../../constants';

function SvgComponent({ height, width, color }: Types.SvgComponentProps) {
    return (
        <Svg viewBox="0 0 16 16" width={width || SVG_SIZE_DEFAULT} height={height || SVG_SIZE_DEFAULT}>
            <G data-name="Group 15462">
                <G data-name="download (19)">
                    <Path data-name="Path 5819" d="M0 16V0h16v16Z" fill="none" />
                    <G data-name="Group 15143" fill={color} transform="scale(-1, 1) translate(-16, 0)">
                        <Path
                            data-name="Path 5820"
                            d="M9.253 9.414 4.586 4.747a2 2 0 0 1 2.829-2.829l4.667 4.667a2 2 0 1 1-2.829 2.829Z"
                            opacity={0.35}
                        />
                        <Path
                            data-name="Path 5821"
                            d="m12.08 9.414-4.667 4.667a2 2 0 1 1-2.829-2.829l4.667-4.667a2 2 0 0 1 2.829 2.829Z"
                        />
                    </G>
                </G>
            </G>
        </Svg>
    );
}

export default memo(SvgComponent);
