import { Text, View, ViewStyle } from 'react-native';
import { withMemo } from '../../hoc';
import useGetAssets from '../../hooks/useGetAssets';
// import { TabView, TabBar } from 'react-native-tab-view';
import { useCallback, useState } from 'react';

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

  console.log("TCL: SangBT: ",)
  return (
    <View>
      <Text>123123</Text>
    </View>
    // <TabView
    //   onIndexChange={onIndexChange}
    //   navigationState={{
    //     index: tab,
    //     routes: [
    //       { key: 'T01', title: 'Lịch hẹn' },
    //       { key: 'T02', title: 'Đã hoàn tất' },
    //       { key: 'T03', title: 'Đã quá hạn' },
    //     ],
    //   }}
    //   renderScene={renderScene}
    //   renderTabBar={renderTabBar}
    //   swipeEnabled={false}
    // />
  );
};

export default withMemo(CTabView);
