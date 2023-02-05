import {Spinner} from '@ui-kitten/components';
import React, {useEffect, useState} from 'react';
import {FlatList, StyleSheet, View, SafeAreaView} from 'react-native';
import {DeliveryCard} from '../components/DeliveryCard';
import {DefaultLayout} from '../layouts/default';
import {useGetRecentActivity} from '../services/api/home';
import {Order} from '../types/order';

type HomeProps = {};

export const HomeScreen: React.FC<HomeProps> = ({}) => {
  const [recentOrders, setRecentOrders] = useState<Order[]>([]);
  const {data, isFetching, isSuccess} = useGetRecentActivity({});

  useEffect(() => {
    if (isSuccess) {
      setRecentOrders(data?.data?.orders || []);
    }
  }, [isSuccess, data?.data?.orders]);
  return (
    <DefaultLayout>
      <SafeAreaView style={styles.container}>
        {isFetching ? (
          <View style={styles.spinner}>
            <Spinner size="giant" />
          </View>
        ) : (
          <FlatList
            data={recentOrders}
            renderItem={({item}) => <DeliveryCard delivery={item} />}
            keyExtractor={order => order.id}
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
