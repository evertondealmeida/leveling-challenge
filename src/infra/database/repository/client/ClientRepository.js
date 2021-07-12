class ClientRepository {
    constructor({ clientModel }) {
        this.clientModel = clientModel;
    }

    async create(data) {
        try{
            return await this.clientModel.create(data);
        } catch (error) {
            throw this.exception.unprocessable(`${error.codeName} ${JSON.stringify(error.keyPattern)}`);
        }
    }

    async getAll() {
        try{
            return await this.clientModel.find();
        } catch (error) {
            throw this.exception.notFound(error.message);
        }
    }

    async getById(_id) {
        try{
            return await this.clientModel.findById(_id);
        } catch (error) {
            throw this.exception.notFound(error.message);
        }
    }

    async getByName({name}) {
        try{
            return await this.clientModel.findOne({name});
        } catch (error) {
            throw this.exception.notFound(error.message);
        }
    }

    async update(_id, {data}) {
        const {name, gender, cpf, birth_date, code_city} = data;
        try{
            return await this.clientModel.findByIdAndUpdate(_id, {name, gender, cpf, birth_date, code_city}, {new : true});
        } catch (error) {
            if(error.code)
                throw this.exception.unprocessable(`${error.codeName} ${JSON.stringify(error.keyPattern)}`);   
            throw this.exception.notFound(error.message);
        }
    }

    async delete(_id) {
        try{
            return await this.clientModel.findByIdAndRemove(_id);
        } catch (error) {
            throw this.exception.notFound(error.message);
        }
    }
    
}

module.exports = ClientRepository;