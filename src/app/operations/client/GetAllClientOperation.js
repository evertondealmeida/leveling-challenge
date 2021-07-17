module.exports = ({ clientService, getAllClientFactory }) => ({
    execute: async ({ name, code_city }) => {
        const result = await clientService.getAll({ name, code_city });
        return getAllClientFactory.buildPayload({result});
    }
});