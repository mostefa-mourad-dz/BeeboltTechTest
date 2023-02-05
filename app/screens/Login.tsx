import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {DefaultLayout} from '../layouts/default';

type LoginProps = {};

export const Login: React.FC<LoginProps> = ({}) => {
  return (
    <DefaultLayout>
      <Text>Login</Text>
    </DefaultLayout>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  },
});
