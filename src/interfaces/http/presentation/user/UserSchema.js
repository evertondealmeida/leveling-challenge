const joi = require('@hapi/joi');

module.exports = () => ({
    params: joi.object().keys({
        id: joi.string().required()
    })
});