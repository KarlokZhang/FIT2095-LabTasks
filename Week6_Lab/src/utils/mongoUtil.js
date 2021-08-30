const mongoose = require('mongoose');

exports.connectToDB = () => {
  const connectionString =
    process.env.NODE_ENV === 'production'
      ? process.env.PRODUCTION_CONNECTION_URL
      : process.env.DEV_CONNECTION_URL;
  const db = mongoose.connection;
  db.on('connected', () => {
    console.log(`DB connected with ${connectionString}`);
  });
  db.on('error', (error) => {
    console.log('DB connection failed');
    console.log(error.message);
    process.exit(1);
  });
  db.on('disconnected', () => {
    console.log('disconnected');
  });
  mongoose.connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};

exports.disconnectDB = async () => {
  return mongoose.disconnect();
};
