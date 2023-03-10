import React from 'react';
import {View} from 'react-native';
import {DefaultLayout} from '../layouts/default';

type EmptyProps = {};

export const EmptyScreen: React.FC<EmptyProps> = ({}) => {
  return (
    <DefaultLayout>
      <View />
    </DefaultLayout>
  );
};
