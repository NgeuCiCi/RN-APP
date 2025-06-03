import { View, ViewStyle } from 'react-native';
import { withMemo } from '../../hoc';
import useGetAssets from '../../hooks/useGetAssets';

type CLineProps = {
  style?: ViewStyle;
};

const CLine = ({ style }: CLineProps) => {
  const { width } = style || {};
  const {
    Colors: { grayShades },
    Metrics: { radius },
    Styles: { rowJustifyCenter },
  } = useGetAssets();
  return (
    <View style={[rowJustifyCenter]}>
      <View
        style={[
          {
            backgroundColor: grayShades[1],
            borderRadius: radius.sm,
            height: 1,
          },
          style,
          width ? { width } : { flex: 1 },
        ]}
      />
    </View>
  );
};

export default withMemo(CLine);
