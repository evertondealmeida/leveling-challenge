const { expect } = require('chai');

const { generateStateJSON } = require('test/support/dataFaker/FacadeDataFaker');
const StateService = require('src/app/services/state/StateService');

describe('App :: Services :: State :: StateService', () => {
    describe('#create', () => {
        context('when state is created with success', () => {
            let stateRepository, stateService;
            const [fakeState] = generateStateJSON(1);
            beforeEach(() => {

                stateRepository = {
                    create: () => Promise.resolve({fakeState})
                };

                stateService = StateService({ stateRepository });
            });

            it('should create the state', async () => {
                const response = await stateService.create(fakeState);
                expect(response.fakeState).to.be.deep.equal(fakeState);               
            });

        });
    });      
});