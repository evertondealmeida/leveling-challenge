const { Router } = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const compression = require('compression');
const methodOverride = require('method-override');

module.exports = ({
    container,
    loggerMiddleware,
    exception,
    httpErrorMiddleware
}) => {
    const apiRouter = Router();

    apiRouter
        .use(loggerMiddleware)
        .use(methodOverride('X-HTTP-Method-Override'))
        .use(cors())
        .use(bodyParser.json())
        .use(compression())
        .use('/api/clients', container.cradle.routerRegister.register(container.cradle.clientRouter))
        .use('/api/states', container.cradle.routerRegister.register(container.cradle.stateRouter))
        .use('/api/cities', container.cradle.routerRegister.register(container.cradle.cityRouter))
        .use((req, res, next) => { next(exception.notFound()); })
        .use(httpErrorMiddleware);

    return apiRouter;
};
