const http = require('http');

require('dotenv').config();

const { mongoConnect, mongoDisconnect } = require('./services/mongo');
const { populateQuotes } = require('./models/quotes.model');

const app = require('./app');
const PORT = process.env.PORT || 8000;

const server = http.createServer(app);

async function startServer() {
  console.log('Starting server ...');
  await mongoConnect();
  await populateQuotes();

  server.listen(PORT, () => {
    console.log(`Listening on port ${PORT} ...`);
  });
}

startServer();
