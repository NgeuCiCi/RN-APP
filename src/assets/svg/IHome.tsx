import React from 'react';
import Svg, { Path } from 'react-native-svg';
import { _SvgProps } from '../../components/common/CSvg';
import { SVG_SIZE_DEFAULT, Types } from '../../constants';

function SvgComponent({ height, width, color }: Types.SvgComponentProps) {
  return (
    <Svg
      data-name="Group 10135"
      width={width || SVG_SIZE_DEFAULT}
      height={height || SVG_SIZE_DEFAULT}
      viewBox="0 0 24 24">
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
