const { request, response } = require('express');

const routes = require('express').Router();

const UserCtrl = require('./controllers/UserController');
const AddressCtrl = require('./controllers/AddressController');
const TechCtrl = require('./controllers/TechController');
const ReportCtrl = require('./controllers/ReportController');

routes.get('/', (request, response) => {
  return response.json({hello: "World"});
});

routes.get('/users',UserCtrl.index);
routes.post('/users',UserCtrl.store);

routes.get('/users/:user_id/addresses',AddressCtrl.index);
routes.post('/users/:user_id/addresses',AddressCtrl.store);

routes.get('/users/:user_id/techs',TechCtrl.index);
routes.post('/users/:user_id/techs',TechCtrl.store);
routes.delete('/users/:user_id/techs',TechCtrl.delete);

routes.get('/report',ReportCtrl.show);


module.exports = routes;