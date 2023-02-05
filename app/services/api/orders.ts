import {useQuery} from 'react-query';
import {Api} from './api';

const customInstance = new Api().apisauce;

export const getOrders = (query: any) => {
  return customInstance.get('/api/orders', query);
};

export const useGetOrders = (query: any) => {
  return useQuery<any>(['orders', query], async () => {
    const data = await getOrders(query);
    return data;
  });
};
