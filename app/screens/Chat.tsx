import {Spinner} from '@ui-kitten/components';
import React, {useEffect, useState} from 'react';
import {FlatList, StyleSheet, View, SafeAreaView} from 'react-native';
import {ChatListItem} from '../components/ChatListItem';
import {DefaultLayout} from '../layouts/default';
import {useGetChats} from '../services/api/chats';
import {Chat} from '../types/chat';

type ChatProps = {};

export const ChatScreen: React.FC<ChatProps> = ({}) => {
  const [chats, setChats] = useState<Chat[]>([]);
  const {data, isFetching, isSuccess} = useGetChats({});

  useEffect(() => {
    if (isSuccess) {
      setChats(data?.data?.chats || []);
    }
  }, [isSuccess, data?.data?.chats]);
  return (
    <DefaultLayout>
      <SafeAreaView style={styles.container}>
        {isFetching ? (
          <View style={styles.spinner}>
            <Spinner size="giant" />
          </View>
        ) : (
          <FlatList
            data={chats}
            renderItem={({item}) => <ChatListItem chat={item} />}
            keyExtractor={item => item.id}
            showsVerticalScrollIndicator={false}
          />
        )}
      </SafeAreaView>
    </DefaultLayout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  spinner: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
