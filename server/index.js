const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());

app.get('/', (req, res) => {
    res.send('All set boss! Begining of something great!')
})

app.listen(8080, () => {
    console.log("server is listening on port 8080.");
})