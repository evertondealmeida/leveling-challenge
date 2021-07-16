const chai = require('chai');
chai.use(require('chai-spies'));
const { expect, spy } = chai;

const { generateCityJSON } = require('test/support/dataFaker/FacadeDataFaker');
const UpdateCityOperation = require('src/app/operations/city/UpdateCityOperation');

describe('App :: Operations :: Contract :: UpdateCityOperation', () => {

    let cityService, updateCityOperation;
    describe('#execute', () => {

        context('when service returns data', () => {

            let [fakeCity] = generateCityJSON(1);
            let [fakeNewCity] = generateCityJSON(1);
            beforeEach(() => {

                cityService = {
                    update: () => Promise.resolve(fakeCity)
                };

                updateCityOperation = UpdateCityOperation({ cityService });
                spy.on(cityService, 'update');
            });

            it('should return city', done => {
                updateCityOperation.execute({
                    id: fakeCity.city_id,
                    newCity: fakeNewCity
                })
                    .then(result => {
                        expect(result).to.be.not.empty();
                        expect(cityService.update).to.have.been.called.once();
                        done();
                    })
                    .catch(error => {
                        done(error);
                    });
            });
        });
    });
});
