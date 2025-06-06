import { Text, useWindowDimensions, View, ViewStyle } from 'react-native';
import { withMemo } from '../../hoc';
import useGetAssets from '../../hooks/useGetAssets';
// import { TabView, TabBar } from 'react-native-tab-view';
import { useState } from 'react';
import { SceneMap, TabView } from 'react-native-tab-view';

type CTabViewProps = {
  style?: ViewStyle;
};

const CTabView = ({ style }: CTabViewProps) => {
  const [tab, setTab] = useState(0);

  const {
    Colors: { grayShades },
    Metrics: { radius },
    Styles: { rowJustifyCenter },
  } = useGetAssets();

  // const onIndexChange = useCallback((index) => {
  //   setTab(index);
  // }, []);

  // const renderTabBar = (props) => {
  //   return (
  //     <TabBar
  //       {...props}
  //       style={{ backgroundColor: '#ebecef', borderRadius: 4 }}
  //       renderLabel={({ route, focused, color }) => (
  //         <Text style={[{ color: focused ? 'black' : 'grey' }]}>{route.title}</Text>
  //       )}
  //       bounces={false}
  //       indicatorStyle={{ width: '31%', height: '80%', backgroundColor: 'white' }}
  //       pressOpacity={0.5}
  //     />
  //   );
  // };
  // const renderScene = () => <></>;
  const aa = () => {
    return <View>
      <Text>
        123
      </Text>
    </View>
  }
  const renderScene = SceneMap({
    first: aa,
    second: aa,
  });
  const routes = [
    { key: 'first', title: 'First' },
    { key: 'second', title: 'Second' },
  ];

  const layout = useWindowDimensions();
  const [index, setIndex] = useState(0);

  return (
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{ width: layout.width }}
    />
  );
};

export default withMemo(CTabView);
