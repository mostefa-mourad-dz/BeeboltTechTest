import {Driver} from './driver';

export interface Chat {
  id: string;
  driver: Driver;
  lastChatDate: Date;
  lastChatText: string;
}
