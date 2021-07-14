const Repository = require('src/infra/database/repository/Repository.js');

class CityRepository extends Repository {
    constructor({ cityModel }) {
        super({
            ResourceModel: cityModel
        });
    }
}

module.exports = CityRepository;
