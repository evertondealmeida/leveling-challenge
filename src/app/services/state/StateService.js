
module.exports = ({ stateRepository }) => ({
    create: async (data) => {
        return await stateRepository.create(data);    
    },

    getAll: async () => {
        return await stateRepository.getAll();
    },

    getById: async (id) => {
        return await stateRepository.getById(id);
    },

    getByName: async ({name}) => {
        return await stateRepository.getByName({name});
    },

    update: async (id, data) => {
        return await stateRepository.update(id, {data});
    },

    delete: async (id) => {
        return await stateRepository.delete(id);
    }
});
