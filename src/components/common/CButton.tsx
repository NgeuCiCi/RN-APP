import { Text, TextStyle, TouchableOpacity, ViewStyle } from 'react-native';
import { SIZE_DEFAULT, Types } from '../../constants';
import { withMemo } from '../../hoc';
import { useTheme } from '../../theme';
import { getAdjacentBreakpoint } from '../../utils/Utils';
import CSvg from './CSvg';

type CButtonProps = {
  iconOpts?: Types.iconOpts;
  titleOpts?: { text: string; style?: TextStyle };
  size?: Types.size;
  style?: ViewStyle;
};

const CButton = ({ style, size = SIZE_DEFAULT, titleOpts, iconOpts }: CButtonProps) => {
  const { name, postion = 'left' } = iconOpts || {};
  const { text = 'Button', style: textStyle } = titleOpts || {};
  const isLeft = postion == 'left';
  const {
    Styles: { rowCenter },
    Metrics: { spacingVertical, spacingHorizontal, radius, fontSize },
  } = useTheme();

  const [sizeStart, sizeEnd] = getAdjacentBreakpoint(size);

  return (
    <TouchableOpacity
      activeOpacity={1}
      onPress={() => { }}
      style={[
        rowCenter,
        {
          backgroundColor: '#e3e3e3',
          paddingVertical: spacingVertical[size],
          borderRadius: radius[sizeEnd],
        },
        style,
      ]}>
      {isLeft && name && <CSvg svg={name} {...iconOpts} />}
      <Text
        style={[
          {
            fontSize: fontSize[size],
            fontWeight: '700',
          },
          isLeft ? { paddingLeft: spacingHorizontal[sizeStart] } : { paddingRight: spacingHorizontal[sizeStart] },
          textStyle,
        ]}>
        {text}
      </Text>
      {!isLeft && name && <CSvg svg={name} {...iconOpts} />}
    </TouchableOpacity>
  );
};

export default withMemo(CButton);
