module.exports = ({ clientService }) => ({
    execute: async (oldClient, body) => {
        return await clientService.update(oldClient.id, body);    
    }
});
