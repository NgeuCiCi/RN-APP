import { CLayout } from '@/components';
import { FC } from 'react';
import { StyleSheet, Text } from 'react-native';

interface Props { }

const InfoUserScreen: FC<Props> = (props) => {
    return (
        <CLayout>
            <Text>InfoUserScreen</Text>
        </CLayout>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default InfoUserScreen;
