import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useSelector } from 'react-redux';
import { CSvg } from '../components';
import { NAME_STACKS } from '../constants';
import { useGetAssets } from '../hooks';
import { LoginScreen } from '../screens';
import { RootState } from '../store';
import { isEmpty } from '../utils/Utils';
import * as Stacks from './stacks';

const Tab = createBottomTabNavigator();

const TabNav = () => {
    const user = useSelector((state: RootState) => state.user);
    const {
        Colors: { svgActive, svgPrimary },
    } = useGetAssets();
    return (
        <Tab.Navigator
            // initialRouteName={isEmpty(user) ? 'Login' : 'Account'}
            screenOptions={({ route }) => {
                const { name } = route || {};
                return {
                    headerShown: false,
                    tabBarIcon: ({ focused }) => {
                        return <CSvg svg={'I' + name} isActive={focused} />;
                    },
                    tabBarActiveTintColor: svgActive,
                    tabBarInactiveTintColor: svgPrimary,
                    tabBarLabelStyle: {
                        fontSize: 14,
                        fontWeight: 'bold',
                    },
                };
            }}>
            {!isEmpty(user) ? (
                NAME_STACKS.map(({ name, title }, index) => {
                    return <Tab.Screen key={index} name={name} component={Stacks[name]} options={{ title }} />;
                })
            ) : (
                <Tab.Screen
                    name="Login"
                    component={LoginScreen}
                    options={{
                        tabBarButton: () => null,
                        tabBarStyle: { display: 'none' },
                    }}
                />
            )}
        </Tab.Navigator>
    );
};

export default TabNav;
