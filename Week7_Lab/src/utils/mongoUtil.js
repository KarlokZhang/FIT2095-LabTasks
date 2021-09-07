const mongoose = require('mongoose');

exports.connectToDB = () => {
  const host = process.env.DB_HOST || 'mongo';
  const connectionString = `mongodb://${host}:27017/FIT2095Lab7`;
  console.log(connectionString);

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
