import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {DefaultLayout} from '../layouts/default';

type EmptyProps = {};

export const EmptyScreen: React.FC<EmptyProps> = ({}) => {
  return (
    <DefaultLayout>
      <Text>Empty Screen</Text>
    </DefaultLayout>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
