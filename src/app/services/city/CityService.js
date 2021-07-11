
module.exports = ({ cityRepository }) => ({
    create: async (data) => {
        return await cityRepository.create(data);    
    },

    getAll: async () => {
        return await cityRepository.getAll();
    },

    getById: async (id) => {
        return await cityRepository.getById(id);
    },

    getByName: async ({name}) => {
        return await cityRepository.getByName({name});
    },

    update: async (id, data) => {
        return await cityRepository.update(id, {data});
    },

    delete: async (id) => {
        return await cityRepository.delete(id);
    }
});
