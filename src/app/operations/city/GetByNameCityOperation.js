module.exports = ({ cityService }) => ({
    execute: async name => {

        return await cityService.getByName({name});
        
    }
});
