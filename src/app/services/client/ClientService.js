
module.exports = ({ clientRepository }) => ({
    create: async data => {
        return await clientRepository.create(data);
    },

    getAll: async ({ name, code_city }) => {
        const query = {
            name,
            code_city
        };
        return await clientRepository.findPaginated({ query });
    },

    getById: async id => {
        return await clientRepository.get(id);
    },

    update: async (id, data) => {
        return await clientRepository.update(id, data);
    },

    delete: async id => {
        return await clientRepository.delete(id);
    }
});
