import { FunctionComponent } from 'react';
import { Text, View, ViewStyle } from 'react-native';
import { SIZE_DEFAULT, Types } from '../../constants';
import { withMemo } from '../../hoc';
import { useTheme } from '../../theme';
import { getAdjacentBreakpoint, isEmpty } from '../../utils/Utils';
import CItemIconTitle, { CItemIconTitleProps } from './CItemIconTitle';

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
        Metrics: { spacingVertical, fontSize, fontWeight, radius },
    } = useTheme();
    const [sizeStart, sizeEnd] = getAdjacentBreakpoint(size);

    if (isEmpty(list)) return null;
    return (
        <View>
            {title && (
                <Text
                    style={[
                        {
                            fontSize: fontSize[sizeEnd],
                            fontWeight: fontWeight[sizeEnd],
                            paddingBottom: spacingVertical[size],
                            color: '#999999',
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
