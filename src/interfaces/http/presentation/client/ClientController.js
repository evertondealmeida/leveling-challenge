const AsyncMiddleware = require('src/interfaces/http/presentation/middlewares/AsyncMiddleware');

module.exports = container => ({
    getById: AsyncMiddleware(async request => {
        const { id } = request.params;
        const response = await container.getByIdClientOperation.execute(id);
        return request.res.status(container.httpConstants.code.OK).json(response);
    }),

    getAll: AsyncMiddleware(async request => {
        const response = await container.getAllClientOperation.execute(request.query);
        return request.res.status(container.httpConstants.code.OK).json(response);
    }),

    create: AsyncMiddleware(async request => {
        const response = await container.createClientOperation.execute(request.body);
        return request.res.status(container.httpConstants.code.CREATED).json(response);
    }),

    update: AsyncMiddleware(async request => {
        const { id } = request.params;
        const { body } = request;
        const response = await container.updateClientOperation.execute( id, body);
        return request.res.status(container.httpConstants.code.OK).json(response);
    }),

    delete: AsyncMiddleware(async request => {
        const { id } = request.params;
        const response = await container.deleteClientOperation.execute(id);
        return request.res.status(container.httpConstants.code.OK).json(response);
    })
});
