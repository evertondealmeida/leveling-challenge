module.exports = ({ clientService, cityService, stateService, getClientFactory }) => ({
    execute: async id => {
        const client = await clientService.getById(id);
        if(!client) return client;
        const city = await cityService.getAll({code: client.code_city});
        const state = await stateService.getAll({code: city.code_state});
        return getClientFactory.buildPayload({client, city, state});
    }
});
