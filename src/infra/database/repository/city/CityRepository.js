class CityRepository {
    constructor({ cityModel }) {
        this.cityModel = cityModel;
    }

    async create(data) {
        return await this.cityModel.create(data);
    }

    async getAll() {
        return await this.cityModel.find();
    }

    async getById(_id) {
        return await this.cityModel.findById(_id);
    }

    async getByName({name}) {
        return await this.cityModel.findOne({name});
    }

    async update(_id, {data}) {
        const {name, code, code_state} = data;
        return await this.cityModel.findByIdAndUpdate(_id, {name, code, code_state}, {new : true});
    }

    async delete(_id) {
        return await this.cityModel.findByIdAndRemove(_id);
    }
    
}

module.exports = CityRepository;