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
        code: joi.number().integer().min(1000000).max(9999999).required(),
        code_state: joi.number().integer().min(1).max(99).required()
    }),
});