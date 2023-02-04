import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {IconButton} from './IconButton';

type AppBarProps = {
  back: boolean;
  title: string;
};

export const AppBar: React.FC<AppBarProps> = ({back, title}) => {
  const isHome = title === 'Home' || true;
  const user = {
    profilePic: '',
    fullName: 'Robert Smith',
  };
  return (
    <View style={styles.container}>
      {isHome ? (
        <View style={styles.leftContainer}>
          {/* <CustomAvatar url={user?.profilePic} /> */}
          <View style={styles.welcomeTextContainer}>
            <Text style={styles.fullName}>{user?.fullName}</Text>
            <Text style={styles.welcome}>Welcome back!</Text>
          </View>
        </View>
      ) : (
        <View style={styles.leftContainer}>
          <View style={styles.backBtnStyle}>
            {back && <IconButton name="arrow-ios-back-outline" fill="white" />}
          </View>
          <View style={styles.titleContainerStyle}>
            <Text style={styles.titleStyle}>{title}</Text>
          </View>
        </View>
      )}
      <View style={styles.iconBg}>
        <IconButton name="bell" fill="white" animation="shake" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 120,
    width: '100%',
  },
  iconBg: {
    height: 40,
    width: 40,
    backgroundColor: '#4D579E',
    borderRadius: 5,
    padding: 10,
  },
  leftContainer: {
    flexDirection: 'row',
    paddingHorizontal: 50,
    width: '70%',
    alignItems: 'center',
  },
  backBtnStyle: {
    height: 30,
    width: 30,
  },
  titleContainerStyle: {
    flexGrow: 1,
    marginLeft: 20,
  },
  titleStyle: {
    fontSize: 24,
    color: 'white',
  },
  welcomeTextContainer: {
    flexDirection: 'column',
  },
  fullName: {
    fontSize: 16,
    color: 'grey',
  },
  welcome: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
});
