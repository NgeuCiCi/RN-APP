import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as Screens from '../../screens/index';
import { NAME_STACKS } from '../../constants';

const STACKS: Record<string, React.FC> = {};

NAME_STACKS.forEach(({ name, screens }) => {
    const Stack = createNativeStackNavigator();
    const StackComponent = () => (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            {screens.map(({ screen }, index) => (
                <Stack.Screen key={index} name={screen} component={Screens[screen]} />
            ))}
        </Stack.Navigator>
    );

    STACKS[name] = StackComponent;
});

Object.entries(STACKS).forEach(([key, value]) => {
    // @ts-ignore
    exports[key] = value;
});
