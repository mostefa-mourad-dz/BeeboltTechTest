import {createServer, Model} from 'miragejs';
import {orderSeeder} from './seeds';

export default function makeServer() {
  return createServer({
    models: {
      order: Model,
    },
    routes() {
      this.urlPrefix = 'http://localhost:3030';
      this.namespace = 'api';
      this.get('/recent-activity', (schema, _request) => {
        return {
          orders: schema.all('order').models,
        };
      });
      this.get('/orders', (schema, request) => {
        const state = request?.queryParams?.state;
        return {
          orders: schema.all('order').models.filter(item => {
            if (state && (state === 'All' || state === item?.state)) {
              return true;
            }
            return false;
          }),
        };
      });
    },
    seeds(server) {
      orderSeeder(server);
    },
  });
}
