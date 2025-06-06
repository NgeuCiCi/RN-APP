import { useEffect, useLayoutEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import { MD2Colors, Text } from 'react-native-paper';
import { getDeviceInfo } from '../../utils/Utils';
import { useNavigation } from '@react-navigation/native';

function HomeScreen() {
    const { version } = getDeviceInfo();
    const navigation = useNavigation();

    // useLayoutEffect(() => {
    //     const parent = navigation.getParent();
    //     parent?.setOptions({
    //         tabBarStyle: { display: 'none' },
    //     });

    //     return () => {
    //         parent?.setOptions({
    //             tabBarStyle: undefined,
    //         });
    //     };
    // }, [navigation]);

    // useEffect(() => {}, []);

    return (
        <View style={styles.container}>
            <Text variant="displaySmall" style={styles.labelStyle}>
                M i n g App
            </Text>
            <View style={{ height: '10%' }}></View>
            <Text variant="titleLarge" style={styles.nowVersion}>
                App Version
            </Text>

            <Text variant="titleLarge" style={styles.nowVersion}>
                {version}
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    nowVersion: {
        fontWeight: '600',
        alignItems: 'center',
        justifyContent: 'center',
    },
    labelStyle: {
        color: MD2Colors.purple800,
    },
});

export default HomeScreen;
