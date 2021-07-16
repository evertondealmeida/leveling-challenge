const { expect } = require('chai');

const CityRepository = require('src/infra/database/repository/CityRepository');
const { cityModel } = require('src/infra/database/mongo/models/CityModel');

describe('Infra :: DataBase :: Repository :: City :: CityRepository', () => {
    const cityRepository = new CityRepository({ cityModel });
    describe('#constructor function', () => {
        context('when construct the repository', () => {
            it('should be created with properly properties', () => {
                expect(cityRepository).to.have.property('ResourceModel');
            });
        });
    });
});

