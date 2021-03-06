const path = require('path');
require('dotenv').config();
const app = require('./src/app');
const { connectToDB } = require('./src/utils/mongoUtil');
const PORT = process.env.PORT || 8080;

connectToDB();

app.listen(PORT, () => {
  console.log(`server listening on port ${PORT}`);
});
