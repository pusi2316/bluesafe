const express = require('express');
const app = express();
const cors = require('cors');
const uploadRoute = require("./routes/upload");
const analyzerRoute = require("./routes/analyze");
app.use(cors());

app.use("/upload", uploadRoute);
app.use("/analyze", analyzerRoute);
module.exports = app;