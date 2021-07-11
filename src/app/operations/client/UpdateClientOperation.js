module.exports = ({ clientService }) => ({
    execute: async (id, body) => {
        return await clientService.update(id, body);    
    }
});
