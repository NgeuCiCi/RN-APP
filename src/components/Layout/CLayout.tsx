import { FC, ReactNode } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import HeaderTabNav from '../../navigators/HeaderTabNav';
import { HomeScreen } from '../../screens';
import { useTheme } from '../../theme';
import CTabView from '../common/CTabView';
interface CLayoutProps {
    children?: ReactNode;
}

const CLayout: FC<CLayoutProps> = ({ children }) => {
    const a = useTheme();
    console.log("TCL: SangBT: a", a)
    const {
        Metrics: { spacingHorizontal, spacingVertical, radius, fontSize, fontWeight, iconSize },
        Styles: { rowCenter },
        Svgs: { IImageDefalut },
        Images: { MingAvt },
        Colors: { white },
    } = useTheme();

    const tabRoutes = [
        {
            key: 'first',
            title: 'Tab Một',
            component: () => (
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <Text>Đây là tab 1</Text>
                </View>
            ),
        },
        {
            key: 'second',
            title: 'Tab Hai',
            component: () => (
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <Text>Đây là tab 2</Text>
                </View>
            ),
        },
        {
            key: 'third',
            title: 'Trang Chủ',
            component: HomeScreen,
        },
    ];
    return (
        <View style={styles.container}>
            <HeaderTabNav title={'Thông tin'} iconOpts={{ name: 'IOrder', title: '123', isBackground: true }} />
            <View style={{ height: 500, backgroundColor: 'red', paddingHorizontal: spacingHorizontal.sm, paddingVertical: spacingVertical.sm }}>

                <CTabView />
            </View>

            {children}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

export default CLayout;
