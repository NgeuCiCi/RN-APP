import { createElement, Fragment, useCallback, useMemo, useRef, useState } from 'react';
import { Animated, RefreshControl, StyleSheet, Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { useImages, useSvgs } from '../../hooks';
import { FastImage } from '../../lib';
import { RootState } from '../../store';
import { setLogout } from '../../store/slices/user/userSlice';
import { getDeviceInfo, getFontSizeByScreen, getScreenHeight, getScreenWidth } from '../../utils/Utils';
import withThemedSvg from './../../hoc/withThemedSvg';

const offsetY = new Animated.Value(0);
const screenHeight = getScreenHeight();
const screenWidth = getScreenWidth();

const AccountScreen = (props) => {
    const dispatch = useDispatch();
    const { IImageDefalut } = useSvgs();
    const [refreshing, setRefreshing] = useState(false);
    const scrollViewRef: any = useRef(null);
    const [heightHeader, setHeightHeader] = useState(100);
    const fontSizeByHeight = getFontSizeByScreen();
    const { isTablet } = getDeviceInfo();
    const user = useSelector((state: RootState) => state.user);
    const { info } = user || {};
    const onRefresh = useCallback(() => {
        setRefreshing(true);
        setTimeout(() => {
            setRefreshing(false);
        }, 1000);
    }, []);

    const _renderHeader = useMemo(() => {
        const backgroundColor = offsetY.interpolate({
            inputRange: [0, screenHeight * 0.25],
            outputRange: ['transparent', '#fff'],
        });
        const textColor = offsetY.interpolate({
            inputRange: [0, screenHeight * 0.3],
            outputRange: ['#fff', '#000'],
        });

        const opacity = offsetY.interpolate({
            inputRange: [0, screenHeight * 0.19, screenHeight * 0.25],
            outputRange: [0, 0, 1],
        });
        return (
            <Animated.View style={[styles.headerContainer, { backgroundColor }]}>
                <View
                    style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'center',
                        height: 46,
                    }}>
                    <Animated.Text style={[styles.title, { color: textColor }]}>
                        <Text>Xin Chào</Text>
                    </Animated.Text>
                    <Animated.Text
                        style={[
                            styles.title,
                            {
                                color: textColor,
                                opacity,
                                maxWidth: screenWidth * 0.5,
                            },
                        ]}
                        numberOfLines={1}>
                        {', BTS'}
                    </Animated.Text>
                </View>
                {/* {createElement(withThemedSvg(INotification), { isBackground: true })} */}
            </Animated.View>
        );
    }, []);

    const _renderImageUser = useMemo(() => {
        const { MingAvt, defaultCover } = useImages();

        return (
            <FastImage
                style={[
                    styles.backgroundImage,
                    {
                        height: screenHeight * (isTablet ? 0.5 : 0.25),
                    },
                ]}
                source={defaultCover}
                resizeMode={FastImage.resizeMode.cover}>
                <View style={[styles.opacityView]}>
                    <View>
                        {<FastImage source={MingAvt} style={styles.imageAvatar} />}
                        {info && (
                            <Fragment>
                                <Text style={[styles.title, { color: '#FFF', fontSize: fontSizeByHeight }]}>
                                    {info.name}
                                </Text>
                                <Text style={[{ color: '#FFF', opacity: 0.7, fontSize: fontSizeByHeight }]}>
                                    {info.phone}
                                </Text>
                            </Fragment>
                        )}
                    </View>
                    <View>
                        {createElement(withThemedSvg(IImageDefalut), {
                            isBackground: true,
                            isScale: true,
                            onPress: () => {
                                dispatch(setLogout());
                            },
                        })}
                    </View>
                </View>
            </FastImage>
        );
    }, [heightHeader]);

    return (
        <View style={styles.container}>
            {_renderHeader}
            <Animated.ScrollView
                ref={scrollViewRef}
                style={styles.scrollView}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{
                    paddingBottom: screenHeight * 0.05,
                }}
                onScroll={Animated.event(
                    [
                        {
                            nativeEvent: { contentOffset: { y: offsetY } },
                        },
                    ],
                    { useNativeDriver: false },
                )}
                refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}>
                {_renderImageUser}
                <View style={{ height: 900 }}></View>
            </Animated.ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    headerContainer: {
        width: screenWidth,
        paddingHorizontal: 15,
        paddingVertical: 15,
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center',
        position: 'absolute',
        top: 0,
        left: 0,
        zIndex: 10,
    },
    title: {
        fontSize: 14,
        fontWeight: '700',
    },
    iconImageBackground: {
        width: 35,
        height: 35,
        borderRadius: 12,
        backgroundColor: 'rgba(255, 255, 255, 0.4)',
        alignSelf: 'flex-end',
        justifyContent: 'center',
        alignItems: 'center',
    },
    scrollView: {
        flex: 1,
    },
    backgroundImage: {
        width: screenWidth,
    },
    opacityView: {
        backgroundColor: 'rgba(0, 0, 0, 0.4)',
        width: '100%',
        height: '100%',
        paddingHorizontal: 15,
        paddingBottom: 20,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
    },
    contentAvatar: {
        width: '100%',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
    },
    imageAvatar: {
        width: screenWidth * 0.22,
        height: screenWidth * 0.22,
        maxWidth: 250,
        maxHeight: 250,
        borderRadius: (screenWidth * 0.22) / 2,
        borderWidth: 1,
        borderColor: '#FFF',
    },
});

export default AccountScreen;
