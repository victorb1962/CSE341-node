const routes = require('express').Router();

const myController = require('../controllers');

routes.get('/', myController.helloFunction);
routes.get('/joke', myController.displayJoke);

module.exports = routes;
