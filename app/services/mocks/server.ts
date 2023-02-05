import {createServer, Model} from 'miragejs';

export function makeServer() {
  const server = createServer({
    models: {
      order: Model,
      user: Model,
    },
  });
  return server;
}
