module.exports = ({ clientService }) => ({
    execute: async id => {

        return await clientService.delete(id);
        
    }
});
