const { expect, spy } = require('chai');

const { generateStateJSON } = require('test/support/dataFaker/FacadeDataFaker');
const GetByIdStateOperation = require('src/app/operations/state/GetByIdStateOperation');

describe('App :: Operations :: State :: GetByIDStateOperation', () => {
    describe('#execute', () => {
        context('when get is successful with state', () => {
            let getByIdStateOperation, stateService, cityService, getStateFactory;
            const [fakeState] = generateStateJSON(1);
            before(() => {
                stateService = {
                    getById: () => (fakeState.id)
                };

                cityService = {
                    getAll: () => Promise.resolve( fakeState.name )

                };

                getStateFactory = {
                    buildPayload: () => Promise.resolve()
                };
                getByIdStateOperation = GetByIdStateOperation({ stateService, cityService, getStateFactory });
                spy.on(stateService, 'getById');
                spy.on(cityService, 'getByAll');
                spy.on(getStateFactory, 'buildPayload');
            });

            it('should return contract', done => {

                getByIdStateOperation.execute(fakeState.id)
                    .then(() => {
                        expect(stateService.getById).to.have.been.called.once();
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
