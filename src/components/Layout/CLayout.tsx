import { FC } from 'react';
import { StyleSheet, View } from 'react-native';
import HeaderTabNav from '../../navigators/HeaderTabNav';
import CTabView from '../common/CTabView';

interface Props { }

const CLayout: FC<Props> = (props) => {
    return (
        <View style={styles.container}>
            <HeaderTabNav title={'Thông tin'} iconOpts={{ name: 'IOrder', title: '123', isBackground: true }} />
            <CTabView />
            {props.children}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

export default CLayout;
