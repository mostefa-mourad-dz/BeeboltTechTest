import React, {useEffect, useState} from 'react';
import {FlatList, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {IndexPath, Select, SelectItem, Spinner} from '@ui-kitten/components';
import {DefaultLayout} from '../layouts/default';
import {useGetOrders} from '../services/api/orders';
import {Order} from '../types/order';
import {DeliveryCard} from '../components/DeliveryCard';
import {orderStatus} from '../constants/orderStatus';

type OrderProps = {};

export const OrdersScreen: React.FC<OrderProps> = ({}) => {
  const [orders, setOrders] = useState<Order[]>([]);
  const [selectedIndex, setSelectedIndex] = useState(new IndexPath(0));
  const [filterItems] = useState([
    {
      status: 'All',
      color: 'black',
    },
    ...orderStatus,
  ]);
  const {data, isFetching, isSuccess} = useGetOrders({
    state: filterItems[selectedIndex?.row].status,
  });

  useEffect(() => {
    if (isSuccess) {
      setOrders(data?.data?.orders || []);
    }
  }, [isSuccess, data?.data?.orders]);

  return (
    <DefaultLayout>
      <View style={styles.selectStyleContainer}>
        <Select
          selectedIndex={selectedIndex}
          style={styles.selectSytle}
          onSelect={index => {
            const item = index instanceof IndexPath ? index : index[0];
            setSelectedIndex(item);
          }}
          value={evaProps => (
            <Text {...evaProps} style={styles.selectTextStyle}>
              {filterItems[selectedIndex?.row].status}
            </Text>
          )}>
          {filterItems?.map(item => (
            <SelectItem key={item?.color} title={item?.status} />
          ))}
        </Select>
      </View>
      <SafeAreaView style={styles.container}>
        {isFetching ? (
          <View style={styles.spinner}>
            <Spinner size="giant" />
          </View>
        ) : (
          <FlatList
            data={orders}
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
  selectTextStyle: {
    fontSize: 11,
    color: '#0E0635',
  },
  selectStyleContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  selectSytle: {
    marginBottom: 50,
    width: '50%',
  },
});
