module.exports = ({ cityService }) => ({
    execute: async ({ name, code_state }) => {
        return await cityService.getAll({ name, code_state });
    }
});
