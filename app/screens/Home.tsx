import React from 'react';
import {View} from 'react-native';
import {DefaultLayout} from '../layouts/default';
import {useGetRecentActivity} from '../services/api/home';

type HomeProps = {};

export const HomeScreen: React.FC<HomeProps> = ({}) => {
  const {data} = useGetRecentActivity({});
  console.log(data?.data);
  return (
    <DefaultLayout>
      <View />
    </DefaultLayout>
  );
};
