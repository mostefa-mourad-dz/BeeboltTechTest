import React from 'react';
import {Card} from '@ui-kitten/components';
import {Order} from '../types/order';
import {StyleSheet, Text, View} from 'react-native';
import {DriverCard} from './DriverCard';
import {format} from 'date-fns';
import {IconButton} from './IconButton';
import {color} from '../utils/statusColor';

type DeliveryCardProps = {
  delivery: Order;
};

export const DeliveryCard: React.FC<DeliveryCardProps> = ({delivery}) => {
  const DeliveryCardHeader = () => {
    return (
      <View style={styles.header}>
        <Text
          style={styles.trackingNumber}>{`#${delivery?.trackingNumber}`}</Text>
        <View
          style={{backgroundColor: color(delivery?.state), borderRadius: 10}}>
          <Text style={styles.status}>{delivery?.state}</Text>
        </View>
      </View>
    );
  };
  return (
    <Card style={styles.container} header={DeliveryCardHeader}>
      <View style={styles.deliveryInfoContainer}>
        <View>
          <Text style={styles.state}>{delivery?.departureState}</Text>
          <Text style={styles.date}>{`${format(
            new Date(delivery?.departureDate),
            'dd MMM yyyy',
          )}`}</Text>
        </View>
        <View style={styles.directionIconContainer}>
          <IconButton name="arrow-forward" />
        </View>
        <View>
          <Text style={styles.state}>{delivery?.arrivalState}</Text>
          <Text style={styles.date}>{`${format(
            new Date(delivery?.arrivalDate),
            'dd MMM yyyy',
          )}`}</Text>
        </View>
      </View>
      <DriverCard driver={delivery?.driver} />
    </Card>
  );
};

const styles = StyleSheet.create({
  container: {
    elevation: 5,
    marginVertical: 5,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 15,
    alignItems: 'center',
  },
  status: {
    fontSize: 14,
    color: 'white',
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  trackingNumber: {
    fontSize: 16,
    fontWeight: '600',
  },
  deliveryInfoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  state: {
    fontSize: 18,
    fontWeight: '500',
  },
  date: {
    opacity: 0.6,
    fontSize: 16,
  },
  directionIconContainer: {
    height: 25,
    width: 50,
  },
});
