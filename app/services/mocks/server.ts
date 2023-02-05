import {createServer} from 'miragejs';

export default function makeServer() {
  const server = createServer({
    routes() {
      this.urlPrefix = 'http://localhost:3030';
      this.get('/api/recent-activity', () => {
        return {
          orders: [],
        };
      });
    },
  });
  return server;
}
