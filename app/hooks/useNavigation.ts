import {CommonActions, useNavigation} from '@react-navigation/native';
import {PAGES} from '../constants/pages';

type navigationProps = {
  screen?: string;
  params?: any;
  reset?: boolean;
  push?: boolean;
};

type rootNavigationProps = {
  stack: string;
  screen?: string;
  params: any;
  reset: boolean;
  push: boolean;
};

export const useStackNavigation = () => {
  const navigation = useNavigation();

  const navigateTo = ({
    stack,
    screen,
    params,
    reset,
    push,
  }: rootNavigationProps) => {
    if (reset) {
      if (!screen) {
        navigation.reset({
          index: 0,
          routes: [{name: stack}],
        });
      } else {
        navigation.dispatch({
          ...CommonActions.reset({
            index: 0,
            routes: [
              {
                name: stack,
                state: {
                  routes: [
                    {
                      name: screen,
                      params: params,
                    },
                  ],
                },
              },
            ],
          }),
        });
      }
    }
    if (push) {
      navigation.push(stack, {screen: screen, params: params});
    }
    navigation.navigate(stack, {screen: screen, params: params});
  };

  return {
    mainNavigation: ({
      screen,
      params = {},
      reset = false,
      push = false,
    }: navigationProps) => {
      navigateTo({stack: PAGES.MAIN, screen, params, reset, push});
    },

    goBackNavigation: () => {
      if (navigation.canGoBack()) {
        navigation.goBack();
      }
    },
  };
};
