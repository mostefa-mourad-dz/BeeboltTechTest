import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

type WelcomeProps = {};

export const Welcome: React.FC<WelcomeProps> = ({ }) => {
  return (
    <View style={styles.container}>
      <Text>Welcome</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
