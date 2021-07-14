const joi = require('joi');

module.exports = () => ({
    params: joi.object().keys({
        id: joi.string().min(24).max(24).required()
    }),

    query: joi.object().keys({
        name: joi.string().regex(/[a-z]*/),
        code_state: joi.number().integer().min(1).max(99)
    }),

    body: joi.object().keys({
        name: joi.string().regex(/[a-z]*/).required(),
        code: joi.number().integer().min(1000000).max(9999999).required(),
        code_state: joi.number().integer().min(1).max(99).required()
    }),
});
