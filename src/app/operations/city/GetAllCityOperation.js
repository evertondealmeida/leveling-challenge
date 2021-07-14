module.exports = ({ cityService }) => ({
    execute: async ({ name, code_state, code }) => {
        return await cityService.getAll({ name, code_state, code});
    }
});
