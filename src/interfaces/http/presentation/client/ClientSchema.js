const joi = require('joi').extend(require('@joi/date'));

module.exports = () => ({
    params: joi.object().keys({
        id: joi.string().required()
    }),

    query: joi.object().keys({
        name: joi.string()
    }),

    body: joi.object().keys({
        name: joi.string().regex(/[a-z]* [a-z]*/).required(),
        cpf: joi.string().regex(/[0-9]*/).min(11).max(11).required(),
        gender: joi.string().regex(/H|M/).min(1).max(1).required(),
        birth_date: joi.date().format('YYYY-MM-DD').options({ convert: true }).raw().required(),
        code_city: joi.number().integer().min(1000000).max(9999999).required()
    }),
});
