class CityRepository {
    constructor({ cityModel }) {
        this.cityModel = cityModel;
    }

    async create(data) {
        try{
            return await this.cityModel.create(data);
        } catch (error) {
            throw this.exception.unprocessable(`${error.codeName} ${JSON.stringify(error.keyPattern)}`);
        }
    }

    async getAll() {
        try{
            return await this.cityModel.find();
        } catch (error) {
            throw this.exception.notFound(error.message);
        }
    }

    async getById(_id) {
        try{
            return await this.cityModel.findById(_id);
        } catch (error) {
            throw this.exception.notFound(error.message);
        }
    }

    async getByName({name}) {
        try{
            return await this.cityModel.findOne({name});
        } catch (error) {
            throw this.exception.notFound(error.message);
        }
    }

    async update(_id, {data}) {
        const {name, code, code_state} = data;
        try{
            return await this.cityModel.findByIdAndUpdate(_id, {name, code, code_state}, {new : true});
        } catch (error) {
            if(error.code)
                throw this.exception.unprocessable(`${error.codeName} ${JSON.stringify(error.keyPattern)}`);   
            throw this.exception.notFound(error.message);
        }
    }

    async delete(_id) {
        try{
            return await this.cityModel.findByIdAndRemove(_id);
        } catch (error) {
            throw this.exception.notFound(error.message);
        }
    }
    
}

module.exports = CityRepository;