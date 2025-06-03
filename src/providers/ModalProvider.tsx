import { createContext, ReactNode, useContext, useState } from 'react';
import { StyleProp, View, ViewStyle } from 'react-native';
import { CLine } from '../components';
import { getScreen } from '../utils/Utils';
import { Modal } from '../lib';

type ModalContextType = {
    onShowModal: (content: ReactNode, Otps?: OtpsType) => void;
    onHideModal: () => void;
};
type OtpsType = {
    style?: StyleProp<ViewStyle>;
};

const ModalContext = createContext<ModalContextType>({
    onShowModal: () => { },
    onHideModal: () => { },
});
const { screenHeight, screenWidth } = getScreen();

export const useAppModal = () => useContext(ModalContext);

export const ModalProvider = ({ children }: { children: ReactNode }) => {
    const [modalStyle, setModalStyle] = useState<StyleProp<ViewStyle>>({});
    const [modalContent, setModalContent] = useState<ReactNode>(null);
    const onShowModal = (content: ReactNode, Otps?: OtpsType) => {
        const { style } = Otps || {};
        setModalContent(content);
        setModalStyle(style);
    };

    const onHideModal = () => {
        setModalContent(null);
    };

    return (
        <ModalContext.Provider value={{ onShowModal, onHideModal }}>
            {children}
            <Modal
                isVisible={!!modalContent}
                deviceWidth={screenWidth}
                deviceHeight={screenHeight}
                avoidKeyboard={true}
                hideModalContentWhileAnimating={true}
                style={[{ margin: 0, justifyContent: 'center', }, modalStyle]}
                onBackdropPress={onHideModal}
                onBackButtonPress={onHideModal}
                onSwipeComplete={onHideModal}
                swipeDirection={'down'}
                animationIn={'slideInUp'}
                animationOut={'slideOutDown'}
                backdropTransitionOutTiming={300}
                animationOutTiming={300}
                coverScreen={true}
                hasBackdrop={true}>
                <View style={[{ backgroundColor: '#fff', borderTopLeftRadius: 8, borderTopRightRadius: 8, paddingBottom: 8 }]}>
                    <CLine style={{ height: 4, width: 40, marginTop: 4 }} />
                    {modalContent}
                    <View>123</View>
                </View>
            </Modal>
        </ModalContext.Provider>
    );
};
