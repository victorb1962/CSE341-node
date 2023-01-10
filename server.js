var express = require('express');
var app = express();
const port = process.env.PORT || 3000;

app.use('/', require('./routes'));

// soft code port to work for Render
app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
});
