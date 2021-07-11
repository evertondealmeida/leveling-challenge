class ClientRepository {
    constructor({ clientModel }) {
        this.clientModel = clientModel;
    }

    async create(data) {
        return await this.clientModel.create(data);
    }

    async getAll() {
        return await this.clientModel.find();
    }

    async getById(_id) {
        return await this.clientModel.findById(_id);
    }

    async getByName({name}) {
        return await this.clientModel.findOne({name});
    }

    async update(_id, {data}) {
        const {name, gender, cpf, birth_date, code_city} = data;
        return await this.clientModel.findByIdAndUpdate(_id, {name, gender, cpf, birth_date, code_city}, {new : true});
    }

    async delete(_id) {
        return await this.clientModel.findByIdAndRemove(_id);
    }
    
}

module.exports = ClientRepository;