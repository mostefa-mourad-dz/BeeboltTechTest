import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {formatDistanceToNow} from 'date-fns';
import {Chat} from '../types/chat';
import {CustomAvatar} from './CustomAvatar';
import {Card} from '@ui-kitten/components';
import {CustomIcon} from './CustomIcon';

type ChatListItemProps = {
  chat: Chat;
};

export const ChatListItem: React.FC<ChatListItemProps> = ({chat}) => {
  return (
    <Card style={styles.card}>
      <View style={styles.container}>
        <View style={styles.container}>
          <CustomAvatar url={chat?.driver?.profilePic} size={'giant'} />
          <View style={styles.mainContainer}>
            <Text style={styles.fullName}>{chat?.driver?.fullName}</Text>
            <Text style={styles.text}>{chat.lastChatText}</Text>
          </View>
        </View>
        <View style={styles.actionContainer}>
          <Text style={styles.date}>{`${formatDistanceToNow(
            new Date(chat?.lastChatDate),
          )}`}</Text>
          <CustomIcon bgColor="transparent" icon="done-all-outline" />
        </View>
      </View>
    </Card>
  );
};

const styles = StyleSheet.create({
  card: {
    marginVertical: 10,
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    widh: '100%',
    height: 50,
  },
  mainContainer: {
    marginLeft: 10,
    flexDirection: 'column',
    justifyContent: 'space-around',
    height: '100%',
  },
  fullName: {
    fontSize: 16,
  },
  text: {
    fontSize: 14,
    opacity: 0.6,
  },
  actionContainer: {
    flexDirection: 'column',
    justifyContent: 'space-around',
    heigh: '100%',
    alignItems: 'flex-end',
  },
  date: {
    fontSize: 12,
    opacity: 0.6,
    flexGrow: 1,
  },
});
