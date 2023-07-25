import { createServer } from 'http-server';

const buildPath = './build';

const serverOptions = {
  root: buildPath,
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
  },
};

const server = createServer(serverOptions);

const port = 3000;
server.listen(port, () => {
  console.log(`Frontend server is running on http://localhost:${port}`);
});
