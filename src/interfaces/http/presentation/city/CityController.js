const AsyncMiddleware = require('src/interfaces/http/presentation/middlewares/AsyncMiddleware');

module.exports = opts => ({
    getById: AsyncMiddleware(async request => {
        const { id } = request.params;
        const response = await opts.getByIdCityOperation.execute(id);
        return request.res.status(opts.httpConstants.code.OK).json(response);
    }),

    getByName: AsyncMiddleware(async request => {
        const { name } = request.params;
        const response = await opts.getByNameCityOperation.execute(name);
        return request.res.status(opts.httpConstants.code.OK).json(response);
    }),

    getAll: AsyncMiddleware(async request => {
        const response = await opts.getAllCityOperation.execute();
        return request.res.status(opts.httpConstants.code.OK).json(response);
    }),

    create: AsyncMiddleware(async request => {
        const response = await opts.createCityOperation.execute(request.body);
        return request.res.status(opts.httpConstants.code.CREATE).json(response);
    }),

    update: AsyncMiddleware(async request => {
        const { id } = request.params;
        const { body } = request;
        const response = await opts.updateCityOperation.execute( id, body);
        return request.res.status(opts.httpConstants.code.OK).json(response);
    }),

    delete: AsyncMiddleware(async request => {
        const { id } = request.params;
        const response = await opts.deleteCityOperation.execute(id);
        return request.res.status(opts.httpConstants.code.OK).json(response);
    })
});
