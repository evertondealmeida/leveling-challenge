const { generateStateJSON } = require('test/support/dataFaker/domain/state/StateDataFaker');
const { generateCityJSON } = require('test/support/dataFaker/domain/city/CityDataFaker');
const { generateClientJSON } = require('test/support/dataFaker/domain/client/ClientDataFaker');

module.exports = {
    generateStateJSON,
    generateCityJSON,
    generateClientJSON
};

