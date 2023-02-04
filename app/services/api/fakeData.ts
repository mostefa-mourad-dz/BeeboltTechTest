import {Delivery} from '../../types/delivery';

export const delivery: Delivery = {
  id: '1',
  state: 'Processing',
  trackingNumber: '1234',
  departureState: 'Alaska',
  arrivalState: 'California',
  departureDate: new Date('2022-07-18'),
  arrivalDate: new Date('2022-07-20'),
  driver: {
    id: '1',
    fullName: 'Jenny Wilson',
    companyName: 'Parcel Delivery Partner',
    profilePic: 'https://picsum.photos/200/300',
  },
};