module.exports = ({ cityService, stateService, clientService, getCityFactory }) => ({
    execute: async id => {
        const city = await cityService.getById(id);
        if(!city) return city;
        const state = await stateService.getAll({code: city.code_state});
        const clients = await clientService.getAll({code_city: city.code});
        return getCityFactory.buildPayload({state, city, clients});
    }
});
