const { expect } = require('chai');

const { generateCityJSON } = require('test/support/dataFaker/FacadeDataFaker');
const CityService = require('src/app/services/city/CityService');

describe('App :: Services :: City :: CityService', () => {
    describe('#getAll', () => {
        context('when city is getAll with success', () => {
            let cityRepository, cityService;
            const [fakeCity] = generateCityJSON(1);
            beforeEach(() => {

                cityRepository = {
                    findPaginated: () => Promise.resolve(fakeCity)
                };

                cityService = CityService({ cityRepository });
            });

            it('should getAll the city', async () => {
                const response = await cityService.getAll(fakeCity.name);
                expect(response).to.be.deep.equal(fakeCity);               
            });

        });
    });      
});