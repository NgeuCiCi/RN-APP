import { FC, Fragment } from 'react';
import { Platform, StatusBar, StyleSheet, Text, View } from 'react-native';
import { CSvg } from '../components';
import { withMemo } from '../hoc';
import { useGetAssets } from '../hooks';
import { getScreen } from '../utils/Utils';
import { useNavigation } from '@react-navigation/native';
import { useTranslation } from 'react-i18next';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Types } from '../constants';

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
    } = useGetAssets();
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
                                fontSize: fontSize.sm,
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
