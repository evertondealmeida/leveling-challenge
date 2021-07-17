module.exports = ({ cityService, getAllCityFactory }) => ({
    execute: async ({ name, code_state, code }) => {
        const result = await cityService.getAll({ name, code_state, code});
        return getAllCityFactory.buildPayload({result});
    }
});
