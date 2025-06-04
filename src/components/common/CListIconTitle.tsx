import { FunctionComponent } from 'react';
import { Text, View, ViewStyle } from 'react-native';
import { Types } from '../../assets/types';
import { withMemo } from '../../hoc';
import { useGetAssets } from '../../hooks';
import { getAdjacentBreakpoint, isEmpty } from '../../utils/Utils';
import CItemIconTitle, { CItemIconTitleProps } from './CItemIconTitle';
import { SIZE_DEFAULT } from '../../constants';

interface CListIconTitleProps {
    isHaveIRight?: boolean;
    styleLine?: ViewStyle;
    titleOpts?: any;
    size?: Types.size;
    list: CItemIconTitleProps[];
}
const CListIconTitle: FunctionComponent<CListIconTitleProps> = (props) => {
    const { size = SIZE_DEFAULT, styleLine, isHaveIRight, titleOpts, list = [] } = props;
    const { title, titleStyle } = titleOpts || {};
    const {
        Metrics: { spacing, fontSize, fontWeight, radius },
        Colors: { grayShades },
    } = useGetAssets();
    const [sizeStart, sizeEnd] = getAdjacentBreakpoint(size);

    if (isEmpty(list)) return null;
    return (
        <View >
            {title && (
                <Text
                    style={[
                        {
                            fontSize: fontSize[sizeEnd],
                            fontWeight: fontWeight[sizeEnd],
                            paddingBottom: spacing[size],
                            color: grayShades[2],
                        },
                        titleStyle,
                    ]}>
                    {title}
                </Text>
            )}
            <View style={{ backgroundColor: '#fff', borderRadius: radius[sizeEnd] }}>
                {list.map((i, index) => {
                    return (
                        <CItemIconTitle
                            key={index}
                            isLine={index != list.length - 1}
                            isHaveIRight={isHaveIRight}
                            size={size}
                            styleLine={styleLine}
                            {...i}
                        />
                    );
                })}
            </View>
        </View>
    );
};
export default withMemo(CListIconTitle);
