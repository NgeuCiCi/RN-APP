import { useNavigation } from '@react-navigation/native';
import { FunctionComponent, useCallback } from 'react';
import { Text, TouchableOpacity, View, ViewStyle } from 'react-native';
import { Types } from '../../assets/types';
import { SIZE_DEFAULT } from '../../constants';
import { withMemo } from '../../hoc';
import { useGetAssets } from '../../hooks';
import { getAdjacentBreakpoint } from '../../utils/Utils';
import CLine from './CLine';
import CSvg from './CSvg';

export interface CItemIconTitleProps {
    isHaveIRight?: boolean;
    isLine?: boolean;
    styleLine?: ViewStyle;
    iconOpts?: any;
    titleOpts?: any;
    size?: Types.size;
    navigateScreen?: string;
    onPress?: () => void;
}
const CItemIconTitle: FunctionComponent<CItemIconTitleProps> = (props) => {
    const {
        size = SIZE_DEFAULT,
        onPress,
        isLine,
        styleLine,
        isHaveIRight = false,
        iconOpts,
        titleOpts,
        navigateScreen,
    } = props;
    const {
        Metrics: { spacingHorizontal, spacingVertical, fontSize, fontWeight },
        Styles: { rowAlignCenter, flexChild },
        Svgs,
    } = useGetAssets();
    const { name = 'IImageDefalut' } = iconOpts || {};
    const { title = 'Title', titleStyle, label, labelStyle } = titleOpts || {};
    const [sizeStart] = getAdjacentBreakpoint(size);
    const navigation = useNavigation();

    const handlePress = useCallback(() => {
        if (onPress) {
            onPress();
        } else {
            navigateScreen && navigation.navigate(navigateScreen);
        }
    }, []);

    return (
        <View style={{ paddingHorizontal: spacingHorizontal[size] }}>
            <TouchableOpacity
                activeOpacity={1}
                onPress={handlePress}
                style={{ paddingVertical: spacingVertical[size] }}>
                <View style={[rowAlignCenter, { gap: 12 }]}>
                    <CSvg svg={name} size={size} {...iconOpts} />
                    <View style={[flexChild, { justifyContent: 'center' }]}>
                        <Text
                            numberOfLines={1}
                            style={[
                                { fontSize: fontSize[size] },
                                isHaveIRight && { fontWeight: fontWeight[size] },
                                titleStyle,
                            ]}>
                            {title}
                        </Text>
                        {label && (
                            <Text
                                numberOfLines={1}
                                style={[
                                    {
                                        fontSize: fontSize[sizeStart],
                                        opacity: 0.5,
                                        marginTop: 'auto',
                                    },
                                    labelStyle,
                                ]}>
                                {label}
                            </Text>
                        )}
                    </View>
                    {isHaveIRight && (
                        <View style={{ marginLeft: 'auto' }}>
                            <CSvg svg={'IRight'} size={sizeStart} adjust={0.5} />
                        </View>
                    )}
                </View>
            </TouchableOpacity>
            {isLine && <CLine style={styleLine} />}
        </View>
    );
};
export default withMemo(CItemIconTitle);
