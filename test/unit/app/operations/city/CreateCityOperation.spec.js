const { expect, spy } = require('chai');

const { generateCityJSON } = require('test/support/dataFaker/FacadeDataFaker');
const CreateCityOperation = require('src/app/operations/city/CreateCityOperation');

describe('App :: Operations :: City :: CreateCityOperation', () => {
    describe('#execute', () => {
        context('when city is created with success', () => {
            let crateCityOperation, cityService;
            const [fakeCity] = generateCityJSON(1);
            before(() => {
                cityService = {
                    create: () => Promise.resolve({ fakeCity })
                };
                crateCityOperation = CreateCityOperation({ cityService });
                spy.on(cityService, 'create');
            });

            it('returns created service city', async () => {
                const response = await crateCityOperation.execute({});

                expect(response.fakeCity).to.be.deep.equal(fakeCity);
                expect(cityService.create).to.be.called.once();
            });
        });
        context('when occurs error', () => {
            let crateCityOperation, cityService;
            before(() => {
                cityService = {
                    create: () => Promise.reject(new Error('test'))
                };
                crateCityOperation = CreateCityOperation({ cityService });
                spy.on(cityService, 'create');
            });

            it('throws error', done => {
                crateCityOperation
                    .execute({})
                    .then(() => done('Must be an error'))
                    .catch(error => {
                        expect(error).to.be.exist();
                        expect(cityService.create).to.be.called.once();
                        done();
                    });
            });
        });
        
    });
});
