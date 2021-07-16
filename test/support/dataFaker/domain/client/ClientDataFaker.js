const dataFaker = require('test/support/dataFaker/dataFaker');

const generateClientJSON = count => {
    const objs = [];
    for (let i = 0; i < count; i++) {
        objs.push(createJsonClientDomainDataFaker());
    }
    return objs;
};

const createJsonClientDomainDataFaker = () => {
    return {
        id: dataFaker.string({ length: 23, numeric: true }),
        name: dataFaker.string({ length: 10, numeric: false }),
        gender: 'H',
        birth_date: dataFaker.date(),
        cpf: dataFaker.string({ length: 11, numeric: true }),
        code_city: dataFaker.integer({min: 1000000, max: 9999999})
    };
};

module.exports = {
    generateClientJSON
};
