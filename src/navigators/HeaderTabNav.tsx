import { useNavigation } from '@react-navigation/core';
import { FC, Fragment } from 'react';
import { useTranslation } from 'react-i18next';
import { Platform, StatusBar, StyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { moderateScale } from 'react-native-size-matters';
import { CSvg } from '../components';
import { Types } from '../constants';
import { withMemo } from '../hoc';
import { useTheme } from '../theme';
import { getScreen } from '../utils/Utils';

interface HeaderTabNavProps {
    title: string;
    iconOpts?: Types.iconOpts;
    onBack?: () => void;
}

const HeaderTabNav: FC<HeaderTabNavProps> = (props) => {
    const { title, iconOpts, onBack } = props;
    const { name, title: titleRight = '' } = iconOpts || {};

    const {
        Metrics: { spacingHorizontal, spacingVertical, fontSize, fontWeight },
        Styles: { rowAlignCenter },
        Colors: { white, svgPrimary },
    } = useTheme();
    const navigation = useNavigation();
    const { t } = useTranslation();
    const insets = useSafeAreaInsets();

    const statusBarHeight = Platform.OS === 'android' ? StatusBar.currentHeight || insets.top : insets.top;

    const { screenWidth } = getScreen();

    const handleBack = () => {
        if (onBack) {
            onBack();
        } else {
            navigation.goBack();
        }
    };

    return (
        <View
            style={[
                rowAlignCenter,
                {
                    marginTop: statusBarHeight,
                    width: screenWidth,
                    paddingHorizontal: spacingHorizontal.lg,
                    paddingVertical: spacingVertical.sm,
                    backgroundColor: white,
                },
            ]}>
            <CSvg svg={'ILeft'} onPress={handleBack} />
            <Text
                style={{
                    color: svgPrimary,
                    fontSize: fontSize.lg,
                    fontWeight: fontWeight.lg,
                    paddingLeft: spacingHorizontal.md,
                }}>
                {t(title)}
            </Text>
            {name && (
                <Fragment>
                    <Text
                        style={[
                            {
                                marginLeft: 'auto',
                                fontSize: moderateScale(fontSize.sm),
                                paddingRight: spacingHorizontal.md,
                            },
                        ]}>
                        {t(titleRight)}
                    </Text>
                    <CSvg svg={name} onPress={onBack} {...iconOpts} />
                </Fragment>
            )}
        </View>
    );
};

const styles = StyleSheet.create({});

export default withMemo(HeaderTabNav);
