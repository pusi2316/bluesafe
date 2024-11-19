const express = require('express');
const app = express();
const cors = require('cors');
const uploadRoute = require("./routes/upload");

app.use(cors());

app.use("/upload", uploadRoute);

module.exports = app;