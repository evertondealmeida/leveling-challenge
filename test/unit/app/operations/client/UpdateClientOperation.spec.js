const chai = require('chai');
chai.use(require('chai-spies'));
const { expect, spy } = chai;

const { generateClientJSON } = require('test/support/dataFaker/FacadeDataFaker');
const UpdateClientOperation = require('src/app/operations/client/UpdateClientOperation');

describe('App :: Operations :: Contract :: UpdateClientOperation', () => {

    let clientService, updateClientOperation;
    describe('#execute', () => {

        context('when service returns data', () => {

            let [fakeClient] = generateClientJSON(1);
            let [fakeNewClient] = generateClientJSON(1);
            beforeEach(() => {

                clientService = {
                    update: () => Promise.resolve(fakeClient)
                };

                updateClientOperation = UpdateClientOperation({ clientService });
                spy.on(clientService, 'update');
            });

            it('should return client', done => {
                updateClientOperation.execute({
                    id: fakeClient.client_id,
                    newClient: fakeNewClient
                })
                    .then(result => {
                        expect(result).to.be.not.empty();
                        expect(clientService.update).to.have.been.called.once();
                        done();
                    })
                    .catch(error => {
                        done(error);
                    });
            });
        });
    });
});
