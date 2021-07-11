module.exports = ({ cityService }) => ({
    execute: async (id, body) => {
        return await cityService.update(id, body);    
    }
});
