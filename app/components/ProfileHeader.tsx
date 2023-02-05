import React from 'react';
import {StyleSheet, View} from 'react-native';
import {User} from '../types/user';
import {DriverCard} from './DriverCard';

type ProfileHeaderProps = {
  user: User;
};

export const ProfileHeader: React.FC<ProfileHeaderProps> = ({user}) => {
  return (
    <View style={styles.container}>
      <DriverCard
        driver={{
          id: `${user?.id}`,
          fullName: user?.first_name + ' ' + user?.last_name,
          companyName: user?.email,
          profilePic: user?.profilePic,
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 40,
  },
});
