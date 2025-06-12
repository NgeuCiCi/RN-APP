import React from 'react';
import { Modal, Text, View, TouchableOpacity } from 'react-native';

type Props = {
    visible: boolean;
    onRequest: () => void;
    onOpenSettings: () => void;
    blocked: boolean;
};

const PermissionModal = ({ visible, onRequest, onOpenSettings, blocked }: Props) => {
    return (
        <Modal visible={visible} transparent animationType="slide">
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#00000088' }}>
                <View style={{ backgroundColor: 'white', padding: 20, borderRadius: 10, width: '80%' }}>
                    <Text style={{ fontSize: 18, fontWeight: 'bold' }}>
                        {blocked ? 'Quyền bị chặn' : 'Yêu cầu quyền truy cập ảnh'}
                    </Text>
                    <Text style={{ marginTop: 10 }}>
                        {blocked
                            ? 'Vui lòng cấp lại quyền trong phần Cài đặt để ứng dụng có thể truy cập ảnh.'
                            : 'Ứng dụng cần quyền để truy cập thư viện ảnh của bạn.'}
                    </Text>
                    <TouchableOpacity
                        style={{ marginTop: 20, backgroundColor: 'blue', padding: 10, borderRadius: 5 }}
                        onPress={blocked ? onOpenSettings : onRequest}
                    >
                        <Text style={{ color: 'white', textAlign: 'center' }}>
                            {blocked ? 'Mở Cài đặt' : 'Cho phép'}
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    );
};

export default PermissionModal;
