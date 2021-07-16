const { expect, spy } = require('chai');

const { generateStateJSON } = require('test/support/dataFaker/FacadeDataFaker');
const CreateStateOperation = require('src/app/operations/state/CreateStateOperation');

describe('App :: Operations :: State :: CreateStateOperation', () => {
    describe('#execute', () => {
        context('when state is created with success', () => {
            let crateStateOperation, stateService;
            const [fakeState] = generateStateJSON(1);
            before(() => {
                stateService = {
                    create: () => Promise.resolve({ fakeState })
                };
                crateStateOperation = CreateStateOperation({ stateService });
                spy.on(stateService, 'create');
            });

            it('returns created service state', async () => {
                const response = await crateStateOperation.execute({});

                expect(response.fakeState).to.be.deep.equal(fakeState);
                expect(stateService.create).to.be.called.once();
            });
        });
        context('when occurs error', () => {
            let crateStateOperation, stateService;
            before(() => {
                stateService = {
                    create: () => Promise.reject(new Error('test'))
                };
                crateStateOperation = CreateStateOperation({ stateService });
                spy.on(stateService, 'create');
            });

            it('throws error', done => {
                crateStateOperation
                    .execute({})
                    .then(() => done('Must be an error'))
                    .catch(error => {
                        expect(error).to.be.exist();
                        expect(stateService.create).to.be.called.once();
                        done();
                    });
            });
        });
        
    });
});
