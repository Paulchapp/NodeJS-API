const http = require('http');
const app = require('./app');

//port du server
const port = processus. env. port || 3000;

const server = http. createServer(application);

serveur. écouter(port);