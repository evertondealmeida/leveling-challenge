module.exports = ({ clientService }) => ({
    execute: async ({ name, code_city }) => {
        return await clientService.getAll({ name, code_city });
    }
});
