const Repository = require('src/infra/database/repository/Repository.js');

class ClientRepository extends Repository {
    constructor({ clientModel }) {
        super({
            ResourceModel: clientModel
        });
    }
}

module.exports = ClientRepository;
