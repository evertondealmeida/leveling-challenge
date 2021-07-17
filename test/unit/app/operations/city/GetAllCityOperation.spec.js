const { expect, spy } = require('chai');

const { generateCityJSON } = require('test/support/dataFaker/FacadeDataFaker');
const GetAllCityOperation = require('src/app/operations/city/GetAllCityOperation');

describe('App :: Operations :: City :: GetAllCityOperation', () => {
    describe('#execute', () => {
        context('when city is list with success', () => {
            let getAllCityOperation, cityService, getAllCityFactory;
            const [fakeCity] = generateCityJSON(1);
            before(() => {
                cityService = {
                    getAll: () => Promise.resolve( fakeCity.name )
                };
                getAllCityFactory = {
                    buildPayload: () => fakeCity
                };

                getAllCityOperation = GetAllCityOperation({ cityService, getAllCityFactory });
                spy.on(cityService, 'getAll');
                spy.on(getAllCityFactory, 'buildPayload');
            });

            it('returns list service city', async () => {
                const response = await getAllCityOperation.execute({});

                expect(response).to.be.not.empty();
                expect(cityService.getAll).to.have.been.called.once();
            });
        });
        context('when get is unsuccessful', () => {
            let getAllCityOperation, cityService;
            before(() => {
                cityService = {
                    getAll: () => Promise.reject(new Error('any_error'))
                };
                getAllCityOperation = GetAllCityOperation({ cityService });
                spy.on(cityService, 'getAll');
            });
    
            it('throws error', done => {
                getAllCityOperation
                    .execute({})
                    .then(() => done('Must be an error'))
                    .catch(error => {
                        expect(error).to.be.exist();
                        expect(cityService.getAll).to.be.called.once();
                        done();
                    });
            });
        });
        
    });
});
