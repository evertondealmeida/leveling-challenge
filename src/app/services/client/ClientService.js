
module.exports = ({ clientRepository }) => ({
    create: async (data) => {
        return await clientRepository.create(data);    
    },

    getAll: async () => {
        return await clientRepository.getAll();
    },

    getById: async (id) => {
        return await clientRepository.getById(id);
    },

    getByName: async ({name}) => {
        return await clientRepository.getByName({name});
    },

    update: async (id, data) => {
        return await clientRepository.update(id, {data});
    },

    delete: async (id) => {
        return await clientRepository.delete(id);
    }
});
