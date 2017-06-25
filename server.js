const express = require('express');
const app = express();
const consign = require('consign');
const port = process.env.PORT || 5000;

consign()
    .include('middlewares.js')
    .then('db.js')
    .then('routes')
    .into(app);

app.listen(port, function() {
    console.log("Server is on");
});
