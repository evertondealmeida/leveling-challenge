const chai = require('chai');
chai.use(require('chai-spies'));
const { expect, spy } = chai;

const { generateStateJSON } = require('test/support/dataFaker/FacadeDataFaker');
const UpdateStateOperation = require('src/app/operations/state/UpdateStateOperation');

describe('App :: Operations :: Contract :: UpdateStateOperation', () => {

    let stateService, updateStateOperation;
    describe('#execute', () => {

        context('when service returns data', () => {

            let [fakeState] = generateStateJSON(1);
            let [fakeNewState] = generateStateJSON(1);
            beforeEach(() => {

                stateService = {
                    update: () => Promise.resolve(fakeState)
                };

                updateStateOperation = UpdateStateOperation({ stateService });
                spy.on(stateService, 'update');
            });

            it('should return state', done => {
                updateStateOperation.execute({
                    id: fakeState.state_id,
                    newState: fakeNewState
                })
                    .then(result => {
                        expect(result).to.be.not.empty();
                        expect(stateService.update).to.have.been.called.once();
                        done();
                    })
                    .catch(error => {
                        done(error);
                    });
            });
        });
    });
});
