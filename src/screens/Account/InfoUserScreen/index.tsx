import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { CLayout } from '../../../components';

interface Props { }

const InfoUserScreen: React.FC<Props> = (props) => {
    return (
        <CLayout >
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
