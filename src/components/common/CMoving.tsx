import { Fragment, ReactNode, useEffect, useMemo, useRef, useState } from 'react';
import { Animated, Text, TouchableOpacity, View } from 'react-native';
import { useGetAssets } from '../../hooks';

interface CMovingProps {
    cmp: ReactNode;
    directionStart?: 'left' | 'right';
    positionComp?: 'top' | 'center' | 'bottom';
    size: number;
    heightLine?: number;
    duration?: number;
    onFinish?: () => void;
}

const CMoving = ({
    cmp,
    size,
    directionStart = 'left',
    positionComp = 'center',
    heightLine = 20,
    duration = 3000,
    onFinish,
}: CMovingProps) => {
    const paddingOffset = useMemo(() => {
        if (positionComp === 'center') return size / 2;
        return size / 5;
    }, [positionComp, size]);

    const iconPosition = useRef(new Animated.Value(size - paddingOffset)).current;
    const trailWidth = useRef(new Animated.Value(0)).current;

    const [containerWidth, setContainerWidth] = useState(0);
    const {
        Styles: { rowCenter },
    } = useGetAssets();

    const _heightLine = heightLine;

    const startAnimation = () => {
        if (containerWidth === 0) return;
        iconPosition.setValue(size - paddingOffset);
        trailWidth.setValue(0);

        Animated.parallel([
            Animated.timing(iconPosition, {
                toValue: containerWidth + paddingOffset,
                duration,
                useNativeDriver: false,
            }),
            Animated.timing(trailWidth, {
                toValue: containerWidth,
                duration,
                useNativeDriver: false,
            }),
        ]).start(() => {
            onFinish?.();
        });
    };

    useEffect(() => {
        if (containerWidth > 0) {
            startAnimation();
        }
    }, [containerWidth]);

    return (
        <Fragment>
            <View onLayout={(e) => setContainerWidth(e.nativeEvent.layout.width)} style={[rowCenter, { height: size }]}>
                <View
                    style={[
                        {
                            position: 'absolute',
                            height: _heightLine,
                            backgroundColor: 'white',
                            top: (size - _heightLine) / 2,
                            [directionStart]: 0,
                            borderRadius: 8,
                            width: containerWidth,
                        },
                    ]}
                />
                <Animated.View
                    style={[
                        {
                            position: 'absolute',
                            height: _heightLine,
                            backgroundColor: '#24326d',
                            top: (size - _heightLine) / 2,
                            [directionStart]: 0,
                            borderRadius: 8,
                            width: trailWidth,
                        },
                    ]}
                />
                <Animated.View
                    style={[
                        {
                            position: 'absolute',
                            height: size,
                        },
                        { [directionStart]: Animated.subtract(iconPosition, size) },
                        positionComp != 'center' && {
                            [positionComp == 'top' ? 'bottom' : 'top']: (size - _heightLine) / 2,
                        },
                    ]}>
                    {cmp}
                </Animated.View>
            </View>
            {/* <TouchableOpacity
                onPress={startAnimation}
                style={{
                    marginTop: 40,
                    backgroundColor: '#007AFF',
                    paddingVertical: 10,
                    paddingHorizontal: 20,
                    borderRadius: 10,
                    alignSelf: 'center',
                    zIndex: 20,
                }}>
                <Text style={{ color: '#fff', fontWeight: 'bold' }}>Bắt đầu</Text>
            </TouchableOpacity> */}
        </Fragment>
    );
};

export default CMoving;
