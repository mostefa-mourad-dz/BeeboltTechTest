import {useQuery} from 'react-query';
import {Api} from './api';

const customInstance = new Api().apisauce;

export const getChats = (query: any) => {
  return customInstance.get('/api/chats', query);
};

export const useGetChats = (query: any) => {
  return useQuery<any>(['chats', query], async () => {
    const data = await getChats(query);
    return data;
  });
};
