const joi = require('joi');

module.exports = ({

    get: joi.object().keys({
        id: joi.string().min(24).max(24).required(),
        name: joi.string().regex(/[a-z]*/).required(),
        uf: joi.string().regex(/^[A-Z]{2}/).min(2).max(2).required(),
        code: joi.number().integer().min(1).max(99).required(),
        cities: joi.array().required()
    })
});

