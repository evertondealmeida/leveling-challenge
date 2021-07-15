const AsyncMiddleware = require('src/interfaces/http/presentation/middlewares/AsyncMiddleware');
const errorHandler = require('src/interfaces/http/presentation/errors/HttpErrors');
const messageEnum = require('src/domain/enums/MessageEnum');

module.exports = container => ({
    getById: AsyncMiddleware(async request => {
        try {
            const { id } = request.params;
            const response = await container.getByIdStateOperation.execute(id);

            if (response)
                return request.res.status(container.httpConstants.code.OK).json(response);
            else
                return request.res.status(container.httpConstants.code.NO_CONTENT).json();

        } catch (error) {
            throw errorHandler.internalServer();
        }
    }),

    getAll: AsyncMiddleware(async request => {
        try {
            let response = await container.getAllStateOperation.execute(request.query);
            const statesMapper = container.stateSerializer.paginatedSerialize(response);
            if (statesMapper.states.length > 0)
                return request.res.status(container.httpConstants.code.OK).json(statesMapper);
            else
                return request.res.status(container.httpConstants.code.NO_CONTENT).json();

        } catch (error) {
            throw errorHandler.internalServer();
        }
    }),

    create: AsyncMiddleware(async request => {
        try {
            const response = await container.createStateOperation.execute(request.body);

            return request.res.status(container.httpConstants.code.CREATED).json(response);

        } catch (error) {
            if (error.errorCode == container.httpConstants.code.CONFLICT)
                throw errorHandler.duplicateKeyError(error.message);
            else
                throw errorHandler.internalServer();
        }
    }),

    update: AsyncMiddleware(async request => {
        try {
            const { id } = request.params;
            const { body } = request;
            const oldState = await container.getByIdStateOperation.execute(id);

            if (!oldState)
                return request.res.status(container.httpConstants.code.NO_CONTENT).json();
            if (oldState.cities.length > 0)
                throw container.httpConstants.code.UNPROCESSABLE_ENTITY;

            const response = await container.updateStateOperation.execute(oldState, body);
            return request.res.status(container.httpConstants.code.OK).json(response);

        } catch (error) {
            if (error.errorCode == container.httpConstants.code.CONFLICT)
                throw errorHandler.duplicateKeyError(error.message);
            if (error === container.httpConstants.code.UNPROCESSABLE_ENTITY)
                throw errorHandler.businessError(messageEnum.LINKED_CITIES);
            else
                throw errorHandler.internalServer();
        }
    }),

    delete: AsyncMiddleware(async request => {
        try {
            const { id } = request.params;
            const state = await container.getByIdStateOperation.execute(id);

            if (!state)
                return request.res.status(container.httpConstants.code.NO_CONTENT).json();
            if (state.cities.length > 0)
                throw container.httpConstants.code.UNPROCESSABLE_ENTITY;

            await container.deleteStateOperation.execute(id);
            return request.res.status(container.httpConstants.code.NO_CONTENT).json();

        } catch (error) {
            if (error === container.httpConstants.code.UNPROCESSABLE_ENTITY)
                throw errorHandler.businessError(messageEnum.LINKED_CITIES);
            else
                throw errorHandler.internalServer();
        }
    })
});
