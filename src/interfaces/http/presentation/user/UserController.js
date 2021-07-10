const AsyncMiddleware = require('src/interfaces/http/presentation/middlewares/AsyncMiddleware');

module.exports = opts => ({
    getUser: AsyncMiddleware(async ctx => {
        return ctx.res.status(200).json('Test route');
    })
});
