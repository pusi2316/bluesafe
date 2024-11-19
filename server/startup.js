const express = require('express');
const app = express();
const cors = require('cors');
const uploadRoute = require("./routes/upload");

app.use(cors());

app.get('/', (req, res) => {
    res.send('All set boss! Begining of something great!')
})
app.use("/upload", uploadRoute);

module.exports = app;