const { expect } = require('chai');


const { generateClientJSON } = require('test/support/dataFaker/FacadeDataFaker');
const ClientService = require('src/app/services/client/ClientService');

describe('App :: Services :: Client :: ClientService', () => {
    describe('#getById', () => {
        context('when client is getById with success', () => {
            let clientRepository, clientService;
            const [fakeClient] = generateClientJSON(1);
            beforeEach(() => {

                clientRepository = {
                    get: () => Promise.resolve(fakeClient)
                };

                clientService = ClientService({ clientRepository });
            });

            it('should getById the client', async () => {
                const response = await clientService.getById(fakeClient.id);
                expect(response).to.be.deep.equal(fakeClient);               
            });

        });
    });      
});