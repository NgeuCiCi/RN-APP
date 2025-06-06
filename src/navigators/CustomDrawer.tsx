import { DrawerContentScrollView } from '@react-navigation/drawer';
import { useState } from 'react';
import { Text, View } from 'react-native';
import { List } from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux';
import { CSvg } from '../components';
import { NAME_STACKS } from '../constants';
import { useGetAssets } from '../hooks';
import { FastImage } from '../lib';
import type { RootState } from '../store/index';
import { setLogout } from '../store/slices/user/userSlice';
import { getScreen } from '../utils/Utils';

const CustomDrawer = (props) => {
    const [expanded, setExpanded] = useState<string[]>([]);
    const { info } = useSelector((state: RootState) => state.user);
    const dispatch = useDispatch();
    const {
        Metrics: { iconSize },
        Images: { MingAvt },
    } = useGetAssets();
    const { screenWidth } = getScreen();
    return (
        <View style={{ flex: 1 }}>
            <DrawerContentScrollView {...props}>
                <View
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        padding: 20,
                    }}>
                    <View>
                        <Text> {info?.name}</Text>
                        <Text> {info?.phone}</Text>
                    </View>
                    <FastImage
                        source={MingAvt}
                        style={{
                            width: screenWidth * 0.22,
                            height: screenWidth * 0.22,
                            maxWidth: 100,
                            maxHeight: 100,
                            borderRadius: (screenWidth * 0.22) / 2,
                            borderWidth: 1,
                            borderColor: '#FFF',
                        }}
                    />
                </View>
                <List.Section>
                    {NAME_STACKS.map(({ name, icon, title, screens }, index) => {
                        const isActive = expanded.includes(name);
                        return (
                            <List.Accordion
                                key={index}
                                id={name}
                                title={title}
                                titleStyle={
                                    isActive ? { fontSize: 16, fontWeight: 'bold', color: '#feb729' } : { fontSize: 16 }
                                }
                                style={{}}
                                onPress={() => {
                                    if (isActive) {
                                        setExpanded(expanded.filter((i) => i !== name));
                                    } else {
                                        setExpanded([...expanded, name]);
                                    }
                                }}
                                left={() => {
                                    return <CSvg svg={icon} isActive={isActive} size={iconSize.md} />;
                                }}>
                                {screens.map(({ screen, title }, index) => {
                                    return (
                                        <List.Item
                                            key={index}
                                            title={title}
                                            onPress={() => {
                                                props.navigation.navigate(name, { screen });
                                            }}
                                        />
                                    );
                                })}
                            </List.Accordion>
                        );
                    })}
                </List.Section>
            </DrawerContentScrollView>

            <List.Item
                title="Logout"
                left={(props) => <List.Icon {...props} icon="logout" />}
                onPress={() => {
                    props.navigation.closeDrawer();
                    dispatch(setLogout());
                }}
            />
        </View>
    );
};

export default CustomDrawer;
