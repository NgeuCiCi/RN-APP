import { createDrawerNavigator } from '@react-navigation/drawer';
import { useSelector } from 'react-redux';
import { NAME_STACKS } from '../constants';
import { LoginScreen } from '../screens';
import { RootState } from '../store';
import { isEmpty } from '../utils/Utils';
import CustomDrawer from './CustomDrawer';
import * as Stacks from './stacks';

const Drawer = createDrawerNavigator();

const DrawerNav = () => {
    const user = useSelector((state: RootState) => state.user);
    return (
        <Drawer.Navigator initialRouteName={isEmpty(user) ? 'Login' : 'Order'} backBehavior="none" drawerContent={(props) => <CustomDrawer {...props} />}>
            {!isEmpty(user) ? (
                NAME_STACKS.map(({ name, title }, index) => {
                    return <Drawer.Screen key={index} name={name} component={Stacks[name]} options={{ title }} />;
                })
            ) : (
                <Drawer.Screen
                    name="Login"
                    component={LoginScreen}
                    options={{
                        header: () => null,
                    }}
                />
            )}
        </Drawer.Navigator>
    );
};

export default DrawerNav;
