import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useSelector } from 'react-redux';
import { NAME_STACKS } from '../constants';
import { withThemedSvg } from '../hoc';
import { useColors, useSvgs } from '../hooks';
import { LoginScreen } from '../screens';
import { RootState } from '../store';
import { isEmpty } from '../utils/Utils';
import * as Stacks from './stacks';

const Tab = createBottomTabNavigator();

const TabNav = () => {
    const { svgActive, svgNotActive } = useColors();
    const SVGs = useSvgs();
    const user = useSelector((state: RootState) => state.user);

    return (
        <Tab.Navigator
            // initialRouteName={isEmpty(user) ? 'Login' : 'Account'}
            screenOptions={({ route }) => {
                const { name } = route || {};
                return {
                    headerShown: false,
                    tabBarIcon: ({ focused }) => {
                        const SvgComponent = SVGs['I' + name];
                        const Icon = withThemedSvg(SvgComponent);
                        return <Icon isActive={focused} />;
                    },
                    tabBarActiveTintColor: svgActive,
                    tabBarInactiveTintColor: svgNotActive,
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
