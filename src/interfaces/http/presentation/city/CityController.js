const AsyncMiddleware = require('src/interfaces/http/presentation/middlewares/AsyncMiddleware');
const errorHandler = require('src/interfaces/http/presentation/errors/HttpErrors');
const messageEnum = require('src/domain/enums/MessageEnum');

module.exports = container => ({
    getById: AsyncMiddleware(async request => {
        try{
            const { id } = request.params;
            const response = await container.getByIdCityOperation.execute(id);

            if(response) 
                return request.res.status(container.httpConstants.code.OK).json(response);
            else
                return request.res.status(container.httpConstants.code.NO_CONTENT).json(); 

        } catch (error) {
            throw errorHandler.internalServer();
        }
    }),

    getAll: AsyncMiddleware(async request => {
        try{
            const response = await container.getAllCityOperation.execute(request.query);
            const citiesMapper = container.citySerializer.paginatedSerialize(response);
            if(citiesMapper.cities.length > 0) 
                return request.res.status(container.httpConstants.code.OK).json(citiesMapper);
            else
                return request.res.status(container.httpConstants.code.NO_CONTENT).json();    

        } catch (error) {
            throw errorHandler.internalServer();
        }
    }),

    create: AsyncMiddleware(async request => { 
        try{
            let response;
            const { body } = request;
            const state = await container.getAllStateOperation.execute({code: body.code_state});

            if(state.length > 0) 
                response = await container.createCityOperation.execute(request.body);     
            else
                throw container.httpConstants.code.UNPROCESSABLE_ENTITY;

            return request.res.status(container.httpConstants.code.CREATED).json(response);

        } catch (error) {
            if(error === container.httpConstants.code.UNPROCESSABLE_ENTITY)
                throw errorHandler.businessError(messageEnum.NOT_EXIST_STATE);
            else if(error.errorCode == container.httpConstants.code.CONFLICT)
                throw errorHandler.duplicateKeyError(error.message);
            else
                throw errorHandler.internalServer();
        }
    }),

    update: AsyncMiddleware(async request => {
        try{
            const { id } = request.params;
            const { body } = request;
            const oldCity = await container.getByIdCityOperation.execute(id);

            if(!oldCity) 
                return request.res.status(container.httpConstants.code.NO_CONTENT).json();  
            if(oldCity.clients.length > 0) 
                throw container.httpConstants.code.UNPROCESSABLE_ENTITY;

            const response = await container.updateCityOperation.execute(oldCity, body);
            return request.res.status(container.httpConstants.code.OK).json(response);

        } catch (error) { 
            if(error.errorCode == container.httpConstants.code.CONFLICT)
                throw errorHandler.duplicateKeyError(error.message);
            if(error === container.httpConstants.code.UNPROCESSABLE_ENTITY)
                throw errorHandler.businessError(messageEnum.LINKED_CLIENTS);
            else
                throw errorHandler.internalServer();
        }
    }),

    delete: AsyncMiddleware(async request => {
        try{
            const { id } = request.params;
            const state = await container.getByIdStateOperation.execute(id);

            if(!state) 
                return request.res.status(container.httpConstants.code.NO_CONTENT).json();  
            if(state.cities.length > 0) 
                throw container.httpConstants.code.UNPROCESSABLE_ENTITY;

            await container.deleteCityOperation.execute(id);        
            return request.res.status(container.httpConstants.code.NO_CONTENT).json();

        } catch (error) { 
            if(error === container.httpConstants.code.UNPROCESSABLE_ENTITY)
                throw errorHandler.businessError(messageEnum.LINKED_CITIES);
            else
                throw errorHandler.internalServer();
        }
    })
});
