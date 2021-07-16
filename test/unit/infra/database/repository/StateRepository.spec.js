const { expect } = require('chai');

const StateRepository = require('src/infra/database/repository/StateRepository');
const { stateModel } = require('src/infra/database/mongo/models/StateModel');

describe('Infra :: DataBase :: Repository :: State :: StateRepository', () => {
    const stateRepository = new StateRepository({ stateModel });
    describe('#constructor function', () => {
        context('when construct the repository', () => {
            it('should be created with properly properties', () => {
                expect(stateRepository).to.have.property('ResourceModel');
            });
        });
    });
});

