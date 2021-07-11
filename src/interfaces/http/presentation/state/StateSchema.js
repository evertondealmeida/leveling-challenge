const joi = require('@hapi/joi');

module.exports = () => ({
    params: joi.object().keys({
        id: joi.string().required()
    }),

    paramsName: joi.object().keys({
        name: joi.string().required()
    }),
    
    body: joi.object().keys({
        name: joi.string().required(),
        uf: joi.string().min(2).max(2).required(),
        code: joi.number().integer().min(1).max(99).required()
    }),
});