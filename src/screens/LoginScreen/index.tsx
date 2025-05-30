import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { StyleSheet, View } from 'react-native';
import { Button, Card, Text, TextInput, useTheme } from 'react-native-paper';
import { ToastState, useToast } from '../../providers/ToastProvider';
import { useLoginMutation } from '../../store/services/auth/services';
import { getDeviceInfo } from '../../utils/Utils';

function LoginScreen({ navigation }) {
    const { version } = getDeviceInfo();
    const { ToastNoblandMessageMulti } = useToast();

    const [username, setUsername] = useState('hieuhoang@ucall.asia');

    const [password, setPassword] = useState('Ucall2024@');

    const theme = useTheme();

    const [login, loginState] = useLoginMutation();
    const { t } = useTranslation();

    const handleLogin = async () => {
        try {
            const data = await login({ username, password }).unwrap();
            navigation.navigate('Account', { screen: 'AccountScreen' });

            // ToastNoblandMessageMulti('Đăng nhập thành công', { type: ToastState.SUCCESS });
        } catch (error) {
            console.log('TCL: SangBT: error', error);
        }
    };

    useEffect(() => { }, []);

    return (
        <View
            style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: theme.colors.primary,
                position: 'relative',
            }}>
            <Card>
                <Card.Title title="M i n g" />

                <Card.Content>
                    <TextInput label={t('username')} style={styles.input} onChangeText={setUsername} value={username} />

                    <TextInput
                        label={t('password')}
                        style={styles.input}
                        onChangeText={setPassword}
                        value={password}
                        secureTextEntry
                    />
                    <Button style={styles.input} mode="contained-tonal" onPress={() => handleLogin()}>
                        {t('login')}
                    </Button>
                </Card.Content>
                <View style={[styles.version, { height: 30 }]}>
                    <Text>{`Version ${version}`}</Text>
                </View>
            </Card>
        </View>
    );
};

const styles = StyleSheet.create({
    input: {
        width: 300,
        margin: 12,
    },
    btn: {
        width: 300,
        margin: 12,
    },
    version: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
});

export default LoginScreen;
