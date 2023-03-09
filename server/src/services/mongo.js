const mongoose = require('mongoose');

require('dotenv').config();

const MONGO_URL = process.env.MONGO_URL;

mongoose.connection.once('open', () => {
  console.log('MongoDB connection open');
});

mongoose.connection.on('error', (err) => {
  console.error(err);
});

async function mongoConnect() {
  console.log('Connecting to MongoDB ...');
  await mongoose.connect(MONGO_URL);
  console.log('Connected to MongoDB');
}

async function mongoDisconnect() {
  console.log('Disconnecting from MongoDB ...');
  await mongoose.connection.close();
  console.log('Disconnected from MongoDB');
}

module.exports = {
  mongoConnect,
  mongoDisconnect,
};
