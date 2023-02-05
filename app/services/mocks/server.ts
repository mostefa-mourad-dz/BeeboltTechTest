import {createServer, Model} from 'miragejs';
import {chatSeeder, orderSeeder} from './seeds';

export default function makeServer() {
  return createServer({
    models: {
      order: Model,
      chat: Model,
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
      this.get('/chats', (schema, _request) => {
        return {
          chats: schema.all('chat').models,
        };
      });
    },
    seeds(server) {
      orderSeeder(server);
      chatSeeder(server);
    },
  });
}
