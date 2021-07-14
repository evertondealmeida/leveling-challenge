module.exports = ({ stateRepository }) => ({
    create: async data => {
        return await stateRepository.create(data);
    },

    getAll: async ({ name, code }) => {
        const query = {
            name,
            code
        };
        return await stateRepository.findPaginated({ query });
    },

    getById: async id => {
        return await stateRepository.get(id);
    },

    update: async (id, data) => {
        return await stateRepository.update(id, data);
    },

    delete: async id => {
        return await stateRepository.delete(id);
    }
});
