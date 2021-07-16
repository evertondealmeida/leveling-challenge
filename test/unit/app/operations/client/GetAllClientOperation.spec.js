const { expect, spy } = require('chai');

const { generateClientJSON } = require('test/support/dataFaker/FacadeDataFaker');
const GetAllClientOperation = require('src/app/operations/client/GetAllClientOperation');

describe('App :: Operations :: Client :: GetAllClientOperation', () => {
    describe('#execute', () => {
        context('when client is list with success', () => {
            let getAllClientOperation, clientService;
            const [fakeClient] = generateClientJSON(1);
            before(() => {
                clientService = {
                    getAll: () => Promise.resolve( fakeClient.name )
                };
                getAllClientOperation = GetAllClientOperation({ clientService });
                spy.on(clientService, 'getAll');
            });

            it('returns list service client', async () => {
                const response = await getAllClientOperation.execute({});

                expect(response).to.be.not.empty();
                expect(clientService.getAll).to.have.been.called.once();
            });
        });
        context('when get is unsuccessful', () => {
            let getAllClientOperation, clientService;
            before(() => {
                clientService = {
                    getAll: () => Promise.reject(new Error('any_error'))
                };
                getAllClientOperation = GetAllClientOperation({ clientService });
                spy.on(clientService, 'getAll');
            });
    
            it('throws error', done => {
                getAllClientOperation
                    .execute({})
                    .then(() => done('Must be an error'))
                    .catch(error => {
                        expect(error).to.be.exist();
                        expect(clientService.getAll).to.be.called.once();
                        done();
                    });
            });
        });
        
    });
});
