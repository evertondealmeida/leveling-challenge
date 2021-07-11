module.exports = ({ clientService }) => ({
    execute: async () => {

        return await clientService.getAll();
        
    }
});
