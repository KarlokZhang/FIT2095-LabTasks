require("dotenv").config();
const express = require("express");
const path = require("path");
const morgan = require("morgan");
const cors = require("cors");
const bodyParser = require("body-parser");

const { connectToDB } = require("./src/utils/mongoUtil");

const router = require("./routes");
const PORT = process.env.PORT || 8080;

const app = express();

const morganLog =
  process.env.NODE_ENV === "production" ? morgan("common") : morgan("dev");

app.use(morganLog);
app.use(cors());
app.use(bodyParser.json());
app.use(express.json());
app.use(
  express.urlencoded({
    extended: false,
  })
);

app.use("/", express.static(path.join(__dirname, "dist/movieAng")));
app.use("/", router);

connectToDB();

app.listen(PORT, () => {
  console.log(`server listening on port ${PORT}`);
});
