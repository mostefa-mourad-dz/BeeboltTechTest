import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

type LoginProps = {};

export const Login: React.FC<LoginProps> = ({ }) => {
  return (
    <View style={styles.container}>
      <Text>Login</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height:'100%',
  },
});
