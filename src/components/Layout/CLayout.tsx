import { FC, ReactNode } from 'react';
import { StyleSheet, View } from 'react-native';
import { useGetAssets } from '../../hooks';
import HeaderTabNav from '../../navigators/HeaderTabNav';
import CTabView from '../common/CTabView';
interface CLayoutProps {
    children?: ReactNode;
}

const CLayout: FC<CLayoutProps> = ({ children }) => {
    return (
        <View style={styles.container}>
            <HeaderTabNav title={'Thông tin'} iconOpts={{ name: 'IOrder', title: '123', isBackground: true }} />
            <CTabView />

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
