import {Driver} from './driver';

export interface Delivery {
  id: string;
  trackingNumber: string;
  state: string;
  departureState: string;
  arrivalState: string;
  departureDate: Date;
  arrivalDate: Date;
  driver: Driver;
}
