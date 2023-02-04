import React from 'react';
import {DefaultLayout} from '../layouts/default';

type EmptyProps = {};

export const EmptyScreen: React.FC<EmptyProps> = ({}) => {
  return <DefaultLayout />;
};
