const { expect, spy } = require('chai');

const { generateStateJSON } = require('test/support/dataFaker/FacadeDataFaker');
const GetAllStateOperation = require('src/app/operations/state/GetAllStateOperation');

describe('App :: Operations :: State :: GetAllStateOperation', () => {
    describe('#execute', () => {
        context('when state is list with success', () => {
            let getAllStateOperation, stateService;
            const [fakeState] = generateStateJSON(1);
            before(() => {
                stateService = {
                    getAll: () => Promise.resolve( fakeState.name )
                };
                getAllStateOperation = GetAllStateOperation({ stateService });
                spy.on(stateService, 'getAll');
            });

            it('returns list service state', async () => {
                const response = await getAllStateOperation.execute({});

                expect(response).to.be.not.empty();
                expect(stateService.getAll).to.have.been.called.once();
            });
        });
        context('when get is unsuccessful', () => {
            let getAllStateOperation, stateService;
            before(() => {
                stateService = {
                    getAll: () => Promise.reject(new Error('any_error'))
                };
                getAllStateOperation = GetAllStateOperation({ stateService });
                spy.on(stateService, 'getAll');
            });
    
            it('throws error', done => {
                getAllStateOperation
                    .execute({})
                    .then(() => done('Must be an error'))
                    .catch(error => {
                        expect(error).to.be.exist();
                        expect(stateService.getAll).to.be.called.once();
                        done();
                    });
            });
        });       
    });
});
