const AsyncMiddleware = require('src/interfaces/http/middlewares/AsyncMiddleware');
const errorHandler = require('src/interfaces/http/errors/HttpErrors');
const messageEnum = require('src/domain/enums/MessageEnum');

module.exports = container => ({
    getById: AsyncMiddleware(async request => {
        try{
            const { id } = request.params;
            const response = await container.getByIdClientOperation.execute(id);

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
            const response = await container.getAllClientOperation.execute(request.query);
            const clientsMapper = container.clientSerializer.paginatedSerialize(response);
            if(clientsMapper.clients.length > 0) 
                return request.res.status(container.httpConstants.code.OK).json(clientsMapper);
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
            const city = await container.getAllCityOperation.execute({code: body.code_city});

            if(city.docs.length > 0) 
                response = await container.createClientOperation.execute(request.body);     
            else
                throw container.httpConstants.code.UNPROCESSABLE_ENTITY;

            return request.res.status(container.httpConstants.code.CREATED).json(response);

        } catch (error) {
            if(error === container.httpConstants.code.UNPROCESSABLE_ENTITY)
                throw errorHandler.businessError(messageEnum.NOT_EXIST_CITY);
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
            const oldClient = await container.getByIdClientOperation.execute(id);

            if(!oldClient) 
                return request.res.status(container.httpConstants.code.NO_CONTENT).json();
            
            const city = await container.getAllCityOperation.execute({code: body.code_city});    
                
            if(city.docs.length <= 0) 
                throw container.httpConstants.code.UNPROCESSABLE_ENTITY;

            const response = await container.updateClientOperation.execute( oldClient, body);
            return request.res.status(container.httpConstants.code.OK).json(response);

        } catch (error) { 
            if(error.errorCode == container.httpConstants.code.CONFLICT)
                throw errorHandler.duplicateKeyError(error.message);
            if(error === container.httpConstants.code.UNPROCESSABLE_ENTITY)
                throw errorHandler.businessError(messageEnum.NOT_EXIST_CITY);
            else
                throw errorHandler.internalServer();
        }
    }),

    delete: AsyncMiddleware(async request => {
        try{
            const { id } = request.params;

            await container.deleteClientOperation.execute(id);         
            return request.res.status(container.httpConstants.code.NO_CONTENT).json();

        } catch (error) { 
            throw errorHandler.internalServer();
        }
    })
});
