const { expect, spy } = require('chai');

const { generateCityJSON } = require('test/support/dataFaker/FacadeDataFaker');
const GetByIdCityOperation = require('src/app/operations/city/GetByIdCityOperation');

describe('App :: Operations :: City :: GetByIDCityOperation', () => {
    describe('#execute', () => {
        context('when get is successful with city', () => {
            let getByIdCityOperation, cityService, stateService, clientService, getCityFactory;
            const [fakeCity] = generateCityJSON(1);
            before(() => {
                cityService = {
                    getById: () => (fakeCity.id)
                };

                stateService = {
                    getAll: () => Promise.resolve( fakeCity.code_state )

                };

                clientService = {
                    getAll: () => Promise.resolve( fakeCity.code )

                };

                getCityFactory = {
                    buildPayload: () => Promise.resolve()
                };
                getByIdCityOperation = GetByIdCityOperation({ cityService, stateService, clientService, getCityFactory });
                spy.on(cityService, 'getById');
                spy.on(stateService, 'getByAll');
                spy.on(clientService, 'getByAll');
                spy.on(getCityFactory, 'buildPayload');
            });

            it('should return contract', done => {

                getByIdCityOperation.execute(fakeCity.id)
                    .then(() => {
                        expect(cityService.getById).to.have.been.called.once();
                        expect(stateService.getByAll).to.not.have.been.called.once();
                        expect(clientService.getByAll).to.not.have.been.called.once();
                        done();
                    })
                    .catch(error => {
                        done(error);
                    });
            });
        });
    });
});
