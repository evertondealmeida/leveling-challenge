const { expect, spy } = require('chai');

const { generateStateJSON } = require('test/support/dataFaker/FacadeDataFaker');
const DeleteStateOperation = require('src/app/operations/state/DeleteStateOperation');

describe('App :: Operations :: State :: DeleteStateOperation', () => {
    describe('#execute', () => {
        context('when get is successful with state', () => {
            let deleteStateOperation, stateService;
            const [fakeState] = generateStateJSON(1);
            before(() => {
                stateService = {
                    delete: () => (fakeState.id)
                };

                deleteStateOperation = DeleteStateOperation({ stateService });
                spy.on(stateService, 'delete');
            });

            it('should return contract', done => {

                deleteStateOperation.execute(fakeState.id)
                    .then(() => {
                        expect(stateService.delete).to.have.been.called.once();
                        done();
                    })
                    .catch(error => {
                        done(error);
                    });
            });
        });
    });
});
