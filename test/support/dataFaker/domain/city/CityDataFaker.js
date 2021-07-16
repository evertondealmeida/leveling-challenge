const dataFaker = require('test/support/dataFaker/dataFaker');

const generateCityJSON = count => {
    const objs = [];
    for (let i = 0; i < count; i++) {
        objs.push(createJsonCityDomainDataFaker());
    }
    return objs;
};

const createJsonCityDomainDataFaker = () => {
    return {
        id: dataFaker.string({ length: 23, numeric: true }),
        name: dataFaker.string({ length: 10, numeric: false }),
        code_state: dataFaker.integer({min: 1, max: 99}),
        code: dataFaker.integer({min: 1000000, max: 9999999})
    };
};

module.exports = {
    generateCityJSON
};
