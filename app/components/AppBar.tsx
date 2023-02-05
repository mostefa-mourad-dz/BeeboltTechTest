import {Icon, Input} from '@ui-kitten/components';
import React, {useContext} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {UserContext} from '../contexts/UserContext';
import {useStackNavigation} from '../hooks/useNavigation';
import {getAppBarType} from '../utils/appBarType';
import {CustomAvatar} from './CustomAvatar';
import {CustomIcon} from './CustomIcon';
import {IconButton} from './IconButton';

type AppBarProps = {};

export const AppBar: React.FC<AppBarProps> = ({}) => {
  const {user} = useContext(UserContext);
  const routeName = useStackNavigation().getCurrentRouteName();
  const appBarType = getAppBarType(routeName);
  return (
    <>
      {appBarType?.show ? (
        <>
          <View style={styles.container}>
            {appBarType?.home ? (
              <View style={styles.leftContainer}>
                <CustomAvatar url={user?.profilePic} />
                <View style={styles.welcomeTextContainer}>
                  <Text style={styles.fullName}>{`${
                    user?.first_name + ' ' + user?.last_name
                  }`}</Text>
                  <Text style={styles.welcome}>{appBarType.title}</Text>
                </View>
              </View>
            ) : (
              <View style={styles.leftContainer}>
                <View style={styles.backBtnStyle}>
                  {appBarType?.back && (
                    <IconButton name="arrow-ios-back-outline" fill="white" />
                  )}
                </View>
                <View style={styles.titleContainerStyle}>
                  <Text style={styles.titleStyle}>{appBarType.title}</Text>
                </View>
              </View>
            )}
            <CustomIcon icon="bell" color="white" size={40} bgColor="#4D579E" />
          </View>

          {(appBarType?.home || appBarType?.search) && (
            <View style={styles.inputContainer}>
              <Input
                style={styles.input}
                size="large"
                placeholder={
                  appBarType?.home ? 'Enter tracking number' : 'search'
                }
                accessoryLeft={<Icon name="search-outline" fill={'grey'} />}
              />
            </View>
          )}
        </>
      ) : (
        <View style={styles.loginTitleContainer}>
          <Text style={styles.loginTitle}>{appBarType.title}</Text>
        </View>
      )}
    </>
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
    marginLeft: 10,
  },
  fullName: {
    fontSize: 16,
    color: 'white',
    opacity: 0.6,
  },
  welcome: {
    fontSize: 20,
    fontWeight: '600',
    color: 'white',
  },
  inputContainer: {
    paddingHorizontal: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: -20,
    marginBottom: 20,
  },
  input: {
    width: '80%',
    borderRadius: 10,
  },
  loginTitle: {
    fontSize: 32,
    width: '100%',
    color: 'white',
  },
  loginTitleContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    paddingHorizontal: 20,
    paddingVertical: 40,
  },
});
