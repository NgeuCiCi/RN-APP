import { FunctionComponent } from 'react';
import { Text, View, ViewStyle } from 'react-native';
import { Types } from '../../assets/types';
import { useGetAssets } from '../../hooks';
import { isEmpty } from '../../utils/Utils';
import { withMemo } from './../../hoc/withMemo';
import CItemIconTitle, { CItemIconTitleProps } from './CItemIconTitle';

interface CListIconTitleProps {
    isHaveIRight?: boolean;
    styleLine?: ViewStyle;
    titleOpts?: any;
    size?: Types.size;
    list: CItemIconTitleProps[];
}
const CListIconTitle: FunctionComponent<CListIconTitleProps> = (props) => {
    const { size, styleLine, isHaveIRight, titleOpts, list = [] } = props;
    const { title, titleStyle } = titleOpts || {};
    const {
        Metrics: { spacing, fontSize, fontWeight, radius },
        Colors: { grayShades },
    } = useGetAssets();
    if (isEmpty(list)) return null;
    return (
        <View style={{ padding: spacing.md }}>
            {title && (
                <Text
                    style={[
                        {
                            fontSize: fontSize.lg,
                            fontWeight: fontWeight.lg,
                            paddingBottom: spacing.md,
                            color: grayShades[2],
                        },
                        titleStyle,
                    ]}>
                    {title}
                </Text>
            )}
            <View style={{ backgroundColor: '#fff', borderRadius: radius.lg }}>
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
