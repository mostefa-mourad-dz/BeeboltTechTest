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
    },
    seeds(server) {
      orderSeeder(server);
    },
  });
}
