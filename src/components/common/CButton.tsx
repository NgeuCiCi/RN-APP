import { Text, TextStyle, TouchableOpacity, ViewStyle } from 'react-native';
import { Types } from '../../assets/types';
import { SIZE_DEFAULT } from '../../constants';
import { withMemo } from '../../hoc';
import { useGetAssets } from '../../hooks';
import { getAdjacentBreakpoint } from '../../utils/Utils';
import CSvg from './CSvg';

type CButtonProps = {
  iconOpts?: any;
  titleOpts: { text: string; style?: TextStyle };
  size?: Types.size;
  style?: ViewStyle;
};

const CButton = ({ style, size = SIZE_DEFAULT, titleOpts, iconOpts = {} }: CButtonProps) => {
  const { name, postion = 'left' } = iconOpts || {};
  const { text = 'Button', style: textStyle } = titleOpts || {};
  const isLeft = postion == 'left';
  const {
    Colors: { grayShades },
    Styles: { rowCenter },
    Metrics: { spacing, radius, fontSize },
    Svgs,
  } = useGetAssets();

  const [sizeStart, sizeEnd] = getAdjacentBreakpoint(size);

  return (
    <TouchableOpacity
      activeOpacity={1}
      onPress={() => { }}
      style={[
        rowCenter,
        {
          backgroundColor: grayShades[1],
          paddingVertical: spacing[size],
          borderRadius: radius[sizeEnd],
        },
        style,
      ]}>
      {isLeft && <CSvg Svg={Svgs[name]} {...iconOpts} />}
      <Text
        style={[
          {
            fontSize: fontSize[size],
            fontWeight: '700',
          },
          isLeft ? { paddingLeft: spacing[sizeStart] } : { paddingRight: spacing[sizeStart] },
          textStyle,
        ]}>
        {text}
      </Text>
      {!isLeft && <CSvg Svg={Svgs[name]} {...iconOpts} />}
    </TouchableOpacity>
  );
};

export default withMemo(CButton);
