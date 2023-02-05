import {useQuery} from 'react-query';
import {Api} from './api';

const customInstance = new Api().apisauce;

export const getRecentActivity = (query: any) => {
  return customInstance.get('/api/recent-activity', query);
};

export const useGetRecentActivity = (query: any) => {
  return useQuery<any>(['recent-activity', query], async () => {
    const data = await getRecentActivity(query);
    return data;
  });
};
