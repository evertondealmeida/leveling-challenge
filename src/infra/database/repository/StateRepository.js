const Repository = require('src/infra/database/repository/Repository.js');

class StateRepository extends Repository {
    constructor({ stateModel }) {
        super({
            ResourceModel: stateModel
        });
    }
}

module.exports = StateRepository;
