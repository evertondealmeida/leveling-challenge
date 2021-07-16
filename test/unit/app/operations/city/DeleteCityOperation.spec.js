const { expect, spy } = require('chai');

const { generateCityJSON } = require('test/support/dataFaker/FacadeDataFaker');
const DeleteCityOperation = require('src/app/operations/city/DeleteCityOperation');

describe('App :: Operations :: City :: DeleteCityOperation', () => {
    describe('#execute', () => {
        context('when get is successful with city', () => {
            let deleteCityOperation, cityService;
            const [fakeCity] = generateCityJSON(1);
            before(() => {
                cityService = {
                    delete: () => (fakeCity.id)
                };

                deleteCityOperation = DeleteCityOperation({ cityService });
                spy.on(cityService, 'delete');
            });

            it('should return contract', done => {

                deleteCityOperation.execute(fakeCity.id)
                    .then(() => {
                        expect(cityService.delete).to.have.been.called.once();
                        done();
                    })
                    .catch(error => {
                        done(error);
                    });
            });
        });
    });
});
