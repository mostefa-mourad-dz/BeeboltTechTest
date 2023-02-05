import {Server} from 'miragejs';

export const orderSeeder = (server: Server) => {
  server.create('order', {
    id: '1',
    state: 'Received',
    trackingNumber: '0001',
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
  });
  server.create('order', {
    id: '2',
    state: 'Created',
    trackingNumber: '0002',
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
  });
  server.create('order', {
    id: '3',
    state: 'In Delivery',
    trackingNumber: '0003',
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
  });
  server.create('order', {
    id: '4',
    state: 'Received',
    trackingNumber: '0004',
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
  });
  server.create('order', {
    id: '5',
    state: 'Cancelled',
    trackingNumber: '0005',
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
  });
  server.create('order', {
    id: '6',
    state: 'Processing',
    trackingNumber: '0006',
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
  });
  server.create('order', {
    id: '7',
    state: 'Cancelled',
    trackingNumber: '0007',
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
  });
};

export const chatSeeder = (server: Server) => {
  server.create('chat', {
    id: '1',
    driver: {
      id: '1',
      fullName: 'Jenny Wilson',
      companyName: 'Parcel Delivery Partner',
      profilePic: 'https://picsum.photos/200/300',
    },
    lastChatDate: new Date('2023-02-04'),
    lastChatText: 'Your parcel order done',
  });
  server.create('chat', {
    id: '1',
    driver: {
      id: '1',
      fullName: 'Jenny Wilson',
      companyName: 'Parcel Delivery Partner',
      profilePic: 'https://picsum.photos/200/300',
    },
    lastChatDate: new Date('2023-02-06'),
    lastChatText: 'Your parcel order done',
  });
  server.create('chat', {
    id: '2',
    driver: {
      id: '1',
      fullName: 'Jenny Wilson',
      companyName: 'Parcel Delivery Partner',
      profilePic: 'https://picsum.photos/200/300',
    },
    lastChatDate: new Date('2023-02-03'),
    lastChatText: 'Your parcel order done',
  });
  server.create('chat', {
    id: '3',
    driver: {
      id: '1',
      fullName: 'Jenny Wilson',
      companyName: 'Parcel Delivery Partner',
      profilePic: 'https://picsum.photos/200/300',
    },
    lastChatDate: new Date('2023-02-05'),
    lastChatText: 'Your parcel order done',
  });
  server.create('chat', {
    id: '4',
    driver: {
      id: '1',
      fullName: 'Jenny Wilson',
      companyName: 'Parcel Delivery Partner',
      profilePic: 'https://picsum.photos/200/300',
    },
    lastChatDate: new Date('2023-02-04'),
    lastChatText: 'Your parcel order done',
  });
  server.create('chat', {
    id: '5',
    driver: {
      id: '1',
      fullName: 'Jenny Wilson',
      companyName: 'Parcel Delivery Partner',
      profilePic: 'https://picsum.photos/200/300',
    },
    lastChatDate: new Date('2023-01-31'),
    lastChatText: 'Your parcel order done',
  });
  server.create('chat', {
    id: '6',
    driver: {
      id: '1',
      fullName: 'Jenny Wilson',
      companyName: 'Parcel Delivery Partner',
      profilePic: 'https://picsum.photos/200/300',
    },
    lastChatDate: new Date('2023-02-01'),
    lastChatText: 'Your parcel order done',
  });
};
