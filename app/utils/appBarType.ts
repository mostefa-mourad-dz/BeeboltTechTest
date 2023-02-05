import {PAGES} from '../constants/pages';

export type AppBarTypeProps = {
  title: string;
  show: boolean;
  back?: boolean;
  home?: boolean;
  chat?: boolean;
  search?: boolean;
  driver?: boolean;
};

export const getAppBarType = (route: string): AppBarTypeProps => {
  switch (route) {
    case PAGES.LOGIN:
      return {
        title: 'Welcome to Beebolt!',
        show: false,
      };
    case PAGES.HOME:
      return {
        title: 'Welcome back!',
        show: true,
        home: true,
      };
    case PAGES.ORDERS:
      return {
        title: 'History',
        show: true,
      };
    case PAGES.CHAT:
      return {
        title: 'Messages',
        search: true,
        show: true,
      };
    default:
      return {
        title: route,
        show: true,
      };
  }
};
