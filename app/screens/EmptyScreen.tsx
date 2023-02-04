import React from 'react';
import {View} from 'react-native';
import {ChatListItem} from '../components/ChatListItem';
import {DefaultLayout} from '../layouts/default';
import {chat} from '../services/api/fakeData';

type EmptyProps = {};

export const EmptyScreen: React.FC<EmptyProps> = ({}) => {
  return (
    <DefaultLayout>
      <View>
        <ChatListItem chat={chat} />
      </View>
    </DefaultLayout>
  );
};
