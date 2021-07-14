module.exports = ({ stateService }) => ({
    execute: async ({ name }) => {
        return await stateService.getAll({ name });
    }
});
