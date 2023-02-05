import {orderStatus} from '../constants/orderStatus';

export const color = (status: string) => {
  switch (status) {
    case orderStatus[0].status:
      return orderStatus[0].color;
    case orderStatus[1].status:
      return orderStatus[1].color;
    case orderStatus[2].status:
      return orderStatus[2].color;
    default:
      return '#2E3A8D';
  }
};
