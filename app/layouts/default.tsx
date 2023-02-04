import React from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';

type LayoutProps = {
  children: any;
};

export const DefaultLayout: React.FC<LayoutProps> = ({children}) => {
  const MIN_APP_BAR_HEIGHT = 120;
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={{minHeight: MIN_APP_BAR_HEIGHT}}>{/* App Bar */}</View>
        <View style={styles.rectangle}>{children}</View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#2E3A8D',
    height: '100%',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  rectangle: {
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
    backgroundColor: 'white',
    width: '100%',
    flexGrow: 1,
  },
});
