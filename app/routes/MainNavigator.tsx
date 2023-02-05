import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {BottomNavigation, BottomNavigationTab} from '@ui-kitten/components';
import {PAGES} from '../constants/pages';
import {useStackNavigation} from '../hooks/useNavigation';
import {IconButton} from '../components/IconButton';
import {EmptyScreen} from '../screens';
import {StyleSheet} from 'react-native';
import {Profile} from '../screens/Profile';
import {HomeScreen} from '../screens/Home';
import {OrdersScreen} from '../screens/Orders';

const {Navigator, Screen} = createBottomTabNavigator();
//
/*  Importing Screens */

type BottomTabsProps = {
  state: any;
};
const BottomTabBar: React.FC<BottomTabsProps> = ({state}) => {
  const {mainNavigation} = useStackNavigation();
  const routes = [
    {
      id: 0,
      icon: 'home-outline',
      path: PAGES.HOME,
    },
    {
      id: 1,
      icon: 'file-text-outline',
      path: PAGES.ORDERS,
    },
    {
      id: 2,
      icon: 'plus-square',
      path: PAGES.ADD_ORDER,
    },
    {
      id: 3,
      icon: 'message-circle-outline',
      path: PAGES.CHAT,
    },
    {
      id: 4,
      icon: 'person-outline',
      path: PAGES.PROFILE,
    },
  ];

  return (
    <BottomNavigation
      selectedIndex={state?.index}
      style={styles.container}
      onSelect={index => {
        mainNavigation({screen: routes[index].path});
      }}>
      {routes.map(route => {
        return (
          <BottomNavigationTab
            key={route.id}
            icon={
              <IconButton
                name={route.icon}
                fill={route.id === state?.index ? '#3366ff' : 'grey'}
              />
            }
          />
        );
      })}
    </BottomNavigation>
  );
};

export const MainNavigator = () => (
  <Navigator
    screenOptions={{
      headerShown: false,
    }}
    initialRouteName={PAGES.HOME}
    backBehavior="history"
    tabBar={props => <BottomTabBar {...props} />}>
    <Screen name={PAGES.HOME} component={HomeScreen} />
    <Screen name={PAGES.ORDERS} component={OrdersScreen} />
    <Screen name={PAGES.ADD_ORDER} component={EmptyScreen} />
    <Screen name={PAGES.CHAT} component={EmptyScreen} />
    <Screen name={PAGES.PROFILE} component={Profile} />
  </Navigator>
);

const styles = StyleSheet.create({
  container: {
    paddingBottom: 30,
  },
});
