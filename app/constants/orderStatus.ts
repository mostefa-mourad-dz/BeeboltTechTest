type orderStatus = {
  status: string;
  color: string;
};

export const orderStatus: orderStatus[] = [
  {
    status: 'Created',
    color: '#C76542',
  },
  {
    status: 'Received',
    color: '#33BA60',
  },
  {
    status: 'Cancelled',
    color: '#F30B0F',
  },
  {
    status: 'In Delivery',
    color: '#2E3A8D',
  },
];
