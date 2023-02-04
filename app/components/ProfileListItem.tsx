import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {CustomIcon} from './CustomIcon';

export type ProfileListItemProps = {
  icon: string;
  bgColor: string;
  color: string;
  title: string;
  redirect?: string;
};

export const ProfileListItem: React.FC<ProfileListItemProps> = ({
  icon,
  bgColor,
  color,
  title,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.mainContainer}>
        <CustomIcon bgColor={bgColor} color={color} icon={icon} size={50} />
        <Text style={styles.title}>{title}</Text>
      </View>
      <CustomIcon bgColor="tansparent" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 50,
    width: '100%',
    marginVertical: 10,
  },
  mainContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    marginLeft: 20,
  },
});
