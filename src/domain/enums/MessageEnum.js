const Enum = require('src/domain/enums/Enum');
/**
 * @readonly
 * @enum {string}
 */
module.exports = Enum({
    LINKED_CITIES: 'The state has linked cities.',
    LINKED_CLIENTS: 'The city has linked clients.',
    NOT_EXIST_STATE: 'State does not exist.',
    NOT_EXIST_CITY: 'City does not exist.'
});