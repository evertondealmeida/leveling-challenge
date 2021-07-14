module.exports = ({ stateService }) => ({
    execute: async ({ name, code }) => {
        return await stateService.getAll({ name, code });
    }
});
