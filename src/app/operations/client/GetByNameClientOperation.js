module.exports = ({ clientService }) => ({
    execute: async name => {

        return await clientService.getByName({name});
        
    }
});
