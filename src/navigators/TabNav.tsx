import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useSelector } from 'react-redux';
import { CSvg } from '../components';
import { NAME_STACKS } from '../constants';
import { LoginScreen } from '../screens';
import { RootState } from '../store';
import { useTheme } from '../theme';
import { isEmpty } from '../utils/Utils';
import * as Stacks from './stacks';

const Tab = createBottomTabNavigator();

const TabNav = () => {
    const user = useSelector((state: RootState) => state.user);
    const {
        Colors: { svgActive, svgPrimary },
        Metrics: { spacingVertical, fontSize },
    } = useTheme();
    return (
        <Tab.Navigator
            // initialRouteName={isEmpty(user) ? 'Login' : 'Account'}
            screenOptions={({ route: { name } }) => ({
                headerShown: false,
                tabBarIcon: ({ focused }) => {
                    return <CSvg svg={'I' + name} isActive={focused} />;
                },
                tabBarStyle: {
                    paddingBottom: spacingVertical.xs,
                    paddingTop: spacingVertical.xs / 2,
                },
                tabBarLabelStyle: {
                    fontSize: fontSize.sm,
                    fontWeight: 'bold',
                },
                tabBarActiveTintColor: svgActive,
                tabBarInactiveTintColor: svgPrimary,
            })}>
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
