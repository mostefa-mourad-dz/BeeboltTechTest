import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {BottomNavigation, BottomNavigationTab} from '@ui-kitten/components';
import {PAGES} from '../constants/pages';
import {useStackNavigation} from '../hooks/useNavigation';
import {IconButton} from '../components/IconButton';
import {EmptyScreen} from '../screens';

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
      icon: 'trending-up-outline',
      path: PAGES.ORDERS,
    },
    {
      id: 2,
      icon: 'search-outline',
      path: PAGES.CHAT,
    },
    {
      id: 3,
      icon: 'paper-plane-outline',
      path: PAGES.PROFILE,
    },
  ];

  return (
    <BottomNavigation
      selectedIndex={state?.index}
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
                fill={route.id === state?.index ? '#FFF' : '#0E0635'}
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
    <Screen name={PAGES.HOME} component={EmptyScreen} />
    <Screen name={PAGES.ORDERS} component={EmptyScreen} />
    <Screen name={PAGES.CHAT} component={EmptyScreen} />
    <Screen name={PAGES.PROFILE} component={EmptyScreen} />
  </Navigator>
);
