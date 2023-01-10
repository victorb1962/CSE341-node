// const express = require('express');
// const bodyParser = require('body-parser');
// const mongodb = require('./bd/connect');

// const app = express();
const port = process.env.PORT || 80;

// app.use('/', require('./routes'))

app.listen(port, () => {
    console.log(`Running on port ${port}`)
})
