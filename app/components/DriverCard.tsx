import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Driver} from '../types/driver';
import {CustomAvatar} from './CustomAvatar';
import {CustomIcon} from './CustomIcon';

type DriverCardProps = {
  driver: Driver;
};

export const DriverCard: React.FC<DriverCardProps> = ({driver}) => {
  return (
    <View style={styles.container}>
      <View style={styles.driverInfoContainer}>
        <CustomAvatar url={driver?.profilePic} />
        <View style={styles.InfoContainer}>
          <Text style={styles.fullName}>{driver?.fullName}</Text>
          <Text style={styles.companyName}>{driver?.companyName}</Text>
        </View>
      </View>
      <CustomIcon />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  driverInfoContainer: {
    flexDirection: 'row',
  },
  InfoContainer: {
    marginLeft: 10,
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  fullName: {
    fontSize: 16,
  },
  companyName: {
    fontSize: 14,
    opacity: 0.8,
  },
});
