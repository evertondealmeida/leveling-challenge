
module.exports = ({ cityRepository }) => ({
    create: async data => {
        return await cityRepository.create(data);
    },

    getAll: async ({ name, code_state }) => {
        const query = {
            name, 
            code_state
        };
        return await cityRepository.findPaginated({ query });
    },

    getById: async id => {
        return await cityRepository.get(id);
    },

    update: async (id, data) => {
        return await cityRepository.update(id, data);
    },

    delete: async id => {
        return await cityRepository.delete(id);
    }
});
