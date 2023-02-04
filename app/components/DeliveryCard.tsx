import React from 'react';
import {Card} from '@ui-kitten/components';
import {Delivery} from '../types/delivery';
import {StyleSheet, Text, View} from 'react-native';
import {DriverCard} from './DriverCard';
import {format} from 'date-fns';
import {IconButton} from './IconButton';

type DeliveryCardProps = {
  delivery: Delivery;
};

const color = (status: string) => {
  switch (status) {
    case 'created':
      return '#C76542';
    case 'recieved':
      return '#33BA60';
    case 'cancelled':
      return '#F30B0F';
    default:
      return '#2E3A8D';
  }
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
            delivery?.departureDate,
            'dd MMM yyyy',
          )}`}</Text>
        </View>
        <View style={styles.directionIconContainer}>
          <IconButton name="arrow-forward" />
        </View>
        <View>
          <Text style={styles.state}>{delivery?.arrivalState}</Text>
          <Text style={styles.date}>{`${format(
            delivery?.arrivalDate,
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
