import { FC, Fragment } from 'react';
import { Platform, StatusBar, StyleSheet, Text, View } from 'react-native';
import { Types } from '../assets/types';
import { CSvg } from '../components';
import { withMemo } from '../hoc';
import { useGetAssets } from '../hooks';
import { getScreen } from '../utils/Utils';
import { useNavigation } from '@react-navigation/native';
import { useTranslation } from 'react-i18next';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

interface HeaderTabNavProps {
    title: string;
    iconOpts?: Types.iconOpts;
    onBack?: () => void;
}

const HeaderTabNav: FC<HeaderTabNavProps> = (props) => {
    const { title, iconOpts, onBack } = props;
    const { name, title: titleRight = '' } = iconOpts || {};

    const {
        Metrics: { spacing, fontSize, fontWeight },
        Styles: { rowAlignCenter },
        Colors: { white, svgPrimary },
    } = useGetAssets();
    const navigation = useNavigation();
    const { t } = useTranslation();
    const insets = useSafeAreaInsets();

    const statusBarHeight = Platform.OS === 'android' ? StatusBar.currentHeight || insets.top : insets.top;
    console.log('TCL: SangBT: statusBarHeight', statusBarHeight);

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
                    paddingHorizontal: spacing.lg,
                    paddingVertical: spacing.md,
                    backgroundColor: white,
                },
            ]}>
            <CSvg svg={'ILeft'} onPress={handleBack} />
            <Text
                style={{
                    color: svgPrimary,
                    fontSize: fontSize.lg,
                    fontWeight: fontWeight.lg,
                    paddingLeft: spacing.md,
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
                                paddingRight: spacing.md,
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
