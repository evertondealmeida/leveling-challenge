const joi = require('joi');

module.exports = () => ({
    params: joi.object().keys({
        id: joi.string().required()
    }),

    query: joi.object().keys({
        name: joi.string()
    }),
    
    body: joi.object().keys({
        name: joi.string().required(),
        uf: joi.string().min(2).max(2).required(),
        code: joi.number().integer().min(1).max(99).required()
    }),
});
