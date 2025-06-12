import { createContext, ReactNode, useContext, useState } from 'react';
import { View, ViewStyle } from 'react-native';
import { CLine } from '../components';
import { Modal } from '../lib';
import { useTheme } from '../theme';
import { getScreen } from '../utils/Utils';
type ModalContextType = {
    onShowModal: (content: ReactNode, Otps?: OtpsType) => void;
    onHideModal: () => void;
};
type OtpsType = {
    style?: ViewStyle;
    position?: 'bottom' | 'center' | 'top';
};

const ModalContext = createContext<ModalContextType>({
    onShowModal: () => { },
    onHideModal: () => { },
});

const OPTS = {
    top: {
        justifyContent: 'flex-start',
        styleName: 'modalTop',
        swipeDirection: 'up',
        animationIn: 'slideInDown',
        animationOut: 'slideOutUp',
    },
    center: {
        justifyContent: 'center',
        styleName: 'modalCenter',
        swipeDirection: ['down', 'up'],
        animationIn: 'fadeIn',
        animationOut: 'fadeOut',
    },
    bottom: {
        justifyContent: 'flex-end',
        styleName: 'modalBottom',
        swipeDirection: 'down',
        animationIn: 'slideInUp',
        animationOut: 'slideOutDown',
    },
};

export const useAppModal = () => useContext(ModalContext);

export const ModalProvider = ({ children }: { children: ReactNode }) => {
    const { screenHeight, screenWidth } = getScreen();
    const [modalContent, setModalContent] = useState<any>(null);
    const [isVisible, setIsVisible] = useState(false);

    const { position = 'center', component, style } = modalContent || {};
    const { justifyContent, styleName, swipeDirection, animationIn, animationOut } = OPTS[position] || {};

    const {
        Metrics: { spacingHorizontal, spacingVertical },
        Styles,
    } = useTheme();

    const onShowModal = (component: ReactNode, Otps?: OtpsType) => {
        const { style = {}, position } = Otps || {};
        setModalContent({ component, position, style });
        setIsVisible(true);
    };

    const onHideModal = () => {
        setIsVisible(false);
    };

    return (
        <ModalContext.Provider value={{ onShowModal, onHideModal }}>
            {children}
            <Modal
                isVisible={isVisible}
                deviceWidth={screenWidth}
                deviceHeight={screenHeight}
                useNativeDriver={true}
                avoidKeyboard={true}
                hasBackdrop={true}
                coverScreen={true}
                backdropColor="black"
                backdropOpacity={0.5}
                hideModalContentWhileAnimating={false}
                style={[{ margin: 0, justifyContent }, style]}
                onBackdropPress={onHideModal}
                onBackButtonPress={onHideModal}
                onSwipeComplete={onHideModal}
                swipeDirection={swipeDirection}
                animationIn={animationIn}
                animationOut={animationOut}
                animationInTiming={800}
                backdropTransitionInTiming={800}
                backdropTransitionOutTiming={800}
                animationOutTiming={800}
                onModalHide={() => setModalContent(null)}>
                {modalContent && (
                    <View style={[{ backgroundColor: '#fff' }, Styles[styleName]]}>
                        {position === 'bottom' && (
                            <CLine
                                style={{
                                    height: spacingVertical.sm,
                                    width: spacingHorizontal.xxl,
                                    marginTop: spacingVertical.sm,
                                }}
                            />
                        )}
                        {component}
                        {position === 'top' && (
                            <CLine
                                style={{
                                    height: spacingVertical.sm,
                                    width: spacingHorizontal.xxl,
                                    marginBottom: spacingVertical.sm,
                                }}
                            />
                        )}
                    </View>
                )}
            </Modal>
        </ModalContext.Provider>
    );
};
