class StateRepository {
    constructor({ stateModel, exception }) {
        this.stateModel = stateModel;
        this.exception = exception;
    }

    async create(data) {
        try{
            return await this.stateModel.create(data);
        } catch (error) {
            throw this.exception.unprocessable(`${error.codeName} ${JSON.stringify(error.keyPattern)}`);
        }
    }

    async getAll() {
        try{
            return await this.stateModel.find();
        } catch (error) {
            throw this.exception.notFound(error.message);
        }
    }

    async getById(_id) {
        try{
            return await this.stateModel.findById(_id);
        } catch (error) {
            throw this.exception.notFound(error.message);
        }
        
    }

    async getByName({name}) {
        try{
            return await this.stateModel.findOne({name});
        } catch (error) {
            throw this.exception.notFound(error.message);
        }
    }

    async update(_id, {data}) {
        const {name, uf, code} = data;
        try{
            return await this.stateModel.findByIdAndUpdate(_id, {name, uf, code}, {new : true});
        } catch (error) {
            if(error.code)
                throw this.exception.unprocessable(`${error.codeName} ${JSON.stringify(error.keyPattern)}`);   
            throw this.exception.notFound(error.message);
        }
    }

    async delete(_id) {
        try{
            return await this.stateModel.findByIdAndRemove(_id);
        } catch (error) {
            throw this.exception.notFound(error.message);
        }
    }
    
}

module.exports = StateRepository;