class StateRepository {
    constructor({ stateModel }) {
        this.stateModel = stateModel;
    }

    async create(data) {
        return await this.stateModel.create(data);
    }

    async getAll() {
        return await this.stateModel.find();
    }

    async getById(_id) {
        return await this.stateModel.findById(_id);
    }

    async getByName({name}) {
        return await this.stateModel.findOne({name});
    }

    async update(_id, {data}) {
        const {name, uf, code} = data;
        return await this.stateModel.findByIdAndUpdate(_id, {name, uf, code}, {new : true});
    }

    async delete(_id) {
        return await this.stateModel.findByIdAndRemove(_id);
    }
    
}

module.exports = StateRepository;