const dataFaker = require('test/support/dataFaker/dataFaker');

const generateStateJSON = count => {
    const objs = [];
    for (let i = 0; i < count; i++) {
        objs.push(createJsonStateDomainDataFaker());
    }
    return objs;
};

const createJsonStateDomainDataFaker = () => {
    return {
        id: dataFaker.string({ length: 23, numeric: true }),
        name: dataFaker.string({ length: 10, numeric: false }),
        code: dataFaker.integer({min: 1, max: 99}),
        uf: dataFaker.string({ length: 2, numeric: false })
    };
};

module.exports = {
    generateStateJSON
};