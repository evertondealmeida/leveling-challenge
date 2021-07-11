const AsyncMiddleware = require('src/interfaces/http/presentation/middlewares/AsyncMiddleware');

module.exports = opts => ({
    getById: AsyncMiddleware(async request => {
        const { id } = request.params;
        return request.res.status(200).json('Test route by id');
    }),

    getByName: AsyncMiddleware(async request => {
        const { name } = request.params;
        return request.res.status(200).json('Test route by name');
    }),

    getAll: AsyncMiddleware(async request => {
        return request.res.status(200).json('Test route all');
    }),

    create: AsyncMiddleware(async request => {
        const { body } = request;
        return request.res.status(201).json('Test route created');
    }),

    update: AsyncMiddleware(async request => {
        const { id } = request.params;
        const { body } = request;
        return request.res.status(200).json('Test route updeted');
    })
});
