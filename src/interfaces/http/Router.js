const { Router } = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const compression = require('compression');
const methodOverride = require('method-override');

module.exports = ({
    container,
}) => {
    const apiRouter = Router();

    apiRouter
        .use(methodOverride('X-HTTP-Method-Override'))
        .use(cors())
        .use(bodyParser.json())
        .use(compression())
        .use('/api/users', container.cradle.routerRegister.register(container.cradle.userRouter));

    return apiRouter;
};
