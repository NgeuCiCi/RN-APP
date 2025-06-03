import React from 'react';
import Svg, { Path } from 'react-native-svg';
import { _SvgProps } from '../../components/common/CSvg';

function SvgComponent(props: _SvgProps) {
  let { size = 24, color } = props;
  return (
    <Svg data-name="Group 10135" width={size} height={size} viewBox="0 0 24 24" {...props}>
      <Path data-name="Path 3544" d="M0 0h24v24H0z" fill="none" />
      <Path
        data-name="Path 3545"
        d="M5 12H3l9-9 9 9h-2"
        fill="none"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
      />
      <Path
        data-name="Path 3546"
        d="M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7"
        fill="none"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
      />
      <Path
        data-name="Rectangle 2416"
        fill="none"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M10 12h4v4h-4z"
      />
    </Svg>
  );
}

const MemoSvgComponent = React.memo(SvgComponent);
export default MemoSvgComponent;
