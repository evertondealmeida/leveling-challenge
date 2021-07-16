const { expect, spy } = require('chai');

const { generateClientJSON } = require('test/support/dataFaker/FacadeDataFaker');
const CreateClientOperation = require('src/app/operations/client/CreateClientOperation');

describe('App :: Operations :: Client :: CreateClientOperation', () => {
    describe('#execute', () => {
        context('when client is created with success', () => {
            let crateClientOperation, clientService;
            const [fakeClient] = generateClientJSON(1);
            before(() => {
                clientService = {
                    create: () => Promise.resolve({ fakeClient })
                };
                crateClientOperation = CreateClientOperation({ clientService });
                spy.on(clientService, 'create');
            });

            it('returns created service client', async () => {
                const response = await crateClientOperation.execute({});

                expect(response.fakeClient).to.be.deep.equal(fakeClient);
                expect(clientService.create).to.be.called.once();
            });
        });
        context('when occurs error', () => {
            let crateClientOperation, clientService;
            before(() => {
                clientService = {
                    create: () => Promise.reject(new Error('test'))
                };
                crateClientOperation = CreateClientOperation({ clientService });
                spy.on(clientService, 'create');
            });

            it('throws error', done => {
                crateClientOperation
                    .execute({})
                    .then(() => done('Must be an error'))
                    .catch(error => {
                        expect(error).to.be.exist();
                        expect(clientService.create).to.be.called.once();
                        done();
                    });
            });
        });
        
    });
});
