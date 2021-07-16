const { expect, spy } = require('chai');

const { generateClientJSON } = require('test/support/dataFaker/FacadeDataFaker');
const GetByIdClientOperation = require('src/app/operations/client/GetByIdClientOperation');

describe('App :: Operations :: Client :: GetByIDClientOperation', () => {
    describe('#execute', () => {
        context('when get is successful with client', () => {
            let getByIdClientOperation, clientService, stateService, cityService, getClientFactory;
            const [fakeClient] = generateClientJSON(1);
            before(() => {
                clientService = {
                    getById: () => (fakeClient.id)
                };

                stateService = {
                    getAll: () => Promise.resolve({})

                };

                cityService = {
                    getAll: () => Promise.resolve( fakeClient.code_city )

                };

                getClientFactory = {
                    buildPayload: () => Promise.resolve()
                };
                getByIdClientOperation = GetByIdClientOperation({ clientService, stateService, cityService, getClientFactory });
                spy.on(clientService, 'getById');
                spy.on(stateService, 'getByAll');
                spy.on(cityService, 'getByAll');
                spy.on(getClientFactory, 'buildPayload');
            });

            it('should return contract', done => {

                getByIdClientOperation.execute(fakeClient.id)
                    .then(() => {
                        expect(clientService.getById).to.have.been.called.once();
                        expect(stateService.getByAll).to.not.have.been.called.once();
                        expect(cityService.getByAll).to.not.have.been.called.once();
                        done();
                    })
                    .catch(error => {
                        done(error);
                    });
            });
        });
    });
});
