const { expect } = require('chai');

const ClientRepository = require('src/infra/database/repository/ClientRepository');
const { clientModel } = require('src/infra/database/mongo/models/ClientModel');

describe('Infra :: DataBase :: Repository :: Client :: ClientRepository', () => {
    const clientRepository = new ClientRepository({ clientModel });
    describe('#constructor function', () => {
        context('when construct the repository', () => {
            it('should be created with properly properties', () => {
                expect(clientRepository).to.have.property('ResourceModel');
            });
        });
    });
});

