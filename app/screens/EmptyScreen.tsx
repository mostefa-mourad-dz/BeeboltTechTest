import React from 'react';
import {Text} from 'react-native';
import {DefaultLayout} from '../layouts/default';

type EmptyProps = {};

export const EmptyScreen: React.FC<EmptyProps> = ({}) => {
  return (
    <DefaultLayout>
      <Text>Empty Screen</Text>
    </DefaultLayout>
  );
};
