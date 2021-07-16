const { expect, spy } = require('chai');

const { generateClientJSON } = require('test/support/dataFaker/FacadeDataFaker');
const DeleteClientOperation = require('src/app/operations/client/DeleteClientOperation');

describe('App :: Operations :: Client :: DeleteClientOperation', () => {
    describe('#execute', () => {
        context('when get is successful with client', () => {
            let deleteClientOperation, clientService;
            const [fakeClient] = generateClientJSON(1);
            before(() => {
                clientService = {
                    delete: () => (fakeClient.id)
                };

                deleteClientOperation = DeleteClientOperation({ clientService });
                spy.on(clientService, 'delete');
            });

            it('should return contract', done => {

                deleteClientOperation.execute(fakeClient.id)
                    .then(() => {
                        expect(clientService.delete).to.have.been.called.once();
                        done();
                    })
                    .catch(error => {
                        done(error);
                    });
            });
        });
    });
});
