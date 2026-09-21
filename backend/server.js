import http from 'http';
import application from './index.js';

const server = http.createServer(application);
server.listen(process.env.SERVER_PORT, () => console.log('server is running..'))