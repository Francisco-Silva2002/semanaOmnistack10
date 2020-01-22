const { Router } = require('express');
const DevController = require('./controllers/DevControllers');
const SearchController = require('./controllers/SearchController');

const routes = Router();

/*
    Métodos HTTP:
        GET - pegar, solicitar informações
        POST - criar registro
        PUT - alterar registro
        DELETE - deletar registro
*/

/*
    Tipos de Parâmetros:
        Query Params (GET) - request.query(Filtros,ordenação, paginação, ...)
        Route Params (PUT, DELETE) - request.params(Identificar um recurso na alteração ou exclusao) 
        Body (POST, PUT) - request.body (Dados para criação ou alteração de um registro)
*/

/*
routes.get('/users', (request, response) => {
    return response.json(request.body);
});*/

routes.get('/devs', DevController.index);
routes.get('/search', SearchController.index);

routes.post('/devs', DevController.store);

module.exports = routes;