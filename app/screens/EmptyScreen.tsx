import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

type EmptyProps = {};

export const EmptyScreen: React.FC<EmptyProps> = ({ }) => {
  return (
    <View style={styles.container}>
      <Text>Empty Screen</Text>
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
