const AsyncMiddleware = require('src/interfaces/http/presentation/middlewares/AsyncMiddleware');

module.exports = container => ({
    getById: AsyncMiddleware(async request => {
        const { id } = request.params;
        const response = await container.getByIdCityOperation.execute(id);
        return request.res.status(container.httpConstants.code.OK).json(response);
    }),

    getAll: AsyncMiddleware(async request => {
        const response = await container.getAllCityOperation.execute(request.query);
        return request.res.status(container.httpConstants.code.OK).json(response);
    }),

    create: AsyncMiddleware(async request => {
        const response = await container.createCityOperation.execute(request.body);
        return request.res.status(container.httpConstants.code.CREATED).json(response);
    }),

    update: AsyncMiddleware(async request => {
        const { id } = request.params;
        const { body } = request;
        const response = await container.updateCityOperation.execute( id, body);
        return request.res.status(container.httpConstants.code.OK).json(response);
    }),

    delete: AsyncMiddleware(async request => {
        const { id } = request.params;
        const response = await container.deleteCityOperation.execute(id);
        return request.res.status(container.httpConstants.code.OK).json(response);
    })
});
