import * as React from 'react';
import Svg, { G, Path } from 'react-native-svg';
import { _SvgProps } from '../../components/common/CSvg';

function SvgComponent(props: _SvgProps) {
    let { size = 20, color } = props;

    return (
        <Svg width={size - 4 || 16} height={size} viewBox="0 0 16 20" {...props}>
            <G data-name="Group 13302">
                <G data-name="Group 2481">
                    <G data-name="Group 2480">
                        <Path
                            data-name="Path 2836"
                            d="M11.826 1.26h-1.511a2.167 2.167 0 00-3.936 0H4.874a.666.666 0 00-.7.63v2.521a.666.666 0 00.7.63h6.957a.666.666 0 00.7-.63V1.89a.666.666 0 00-.705-.63z"
                            fill={color}
                        />
                    </G>
                </G>
                <G data-name="Group 2483">
                    <G data-name="Group 2482">
                        <Path
                            data-name="Path 2837"
                            d="M15.3 2.519h-1.387v1.89a2 2 0 01-2.087 1.89H4.87a2 2 0 01-2.087-1.89v-1.89H1.391A1.333 1.333 0 000 3.779v15.123a1.316 1.316 0 001.391 1.26H15.3a1.316 1.316 0 001.391-1.26V3.779a1.316 1.316 0 00-1.391-1.26zM8.14 13.677l-2.783 2.521a.751.751 0 01-.985 0l-1.391-1.26a.589.589 0 010-.891.748.748 0 01.984 0l.9.814 2.29-2.074a.748.748 0 01.984 0 .589.589 0 01.006.89zm0-5.041l-2.783 2.521a.751.751 0 01-.985 0l-1.391-1.26a.589.589 0 010-.891.748.748 0 01.984 0l.9.814 2.29-2.074a.748.748 0 01.984 0 .589.589 0 01.006.89zm5.077 6.483h-2.782a.633.633 0 110-1.26h2.783a.633.633 0 110 1.26zm0-5.041h-2.782a.633.633 0 110-1.26h2.783a.633.633 0 110 1.26z"
                            fill={color}
                        />
                    </G>
                </G>
            </G>
        </Svg>
    );
}

const MemoSvgComponent = React.memo(SvgComponent);
export default MemoSvgComponent;
