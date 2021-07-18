const { Router } = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const compression = require('compression');
const methodOverride = require('method-override');
const swaggerDocument = require('./swagger/swagger.json');
const swaggerUi = require('swagger-ui-express');

module.exports = ({
    container,
    loggerMiddleware,
    httpErrorMiddleware,
    exception
}) => {
    const apiRouter = Router();

    apiRouter
        .use(loggerMiddleware)
        .use(methodOverride('X-HTTP-Method-Override'))
        .use(cors())
        .use(bodyParser.json())
        .use(compression())
        .use('/api/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument))
        .use('/api/states', container.cradle.routerRegister.register(container.cradle.stateRouter))
        .use('/api/clients', container.cradle.routerRegister.register(container.cradle.clientRouter))
        .use('/api/cities', container.cradle.routerRegister.register(container.cradle.cityRouter))
        .use((req, res, next) => { next(exception.notFound()); })
        .use(httpErrorMiddleware);

    return apiRouter;
};
