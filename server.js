const express = require("express");
const path = require("path");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();
app.use(bodyParser.json());
app.use(cors());

mongoose.connect(process.env.DATABASE_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
}).then(() => {
    console.log("Database connected");
}).catch((err) => {
    console.log(err);
});

app.use(express.static(__dirname + "/dist/qtv-app"));

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname + "/dist/qtv-app/index.html"));
});

const server = app.listen(process.env.PORT || 8085, () => {
  console.log(server.address());
});
