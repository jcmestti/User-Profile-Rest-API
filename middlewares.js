module.exports = function(app) {
    const bodyParser = require('body-parser');
    const router = require('express').Router();

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));
    app.use('/', router);
}