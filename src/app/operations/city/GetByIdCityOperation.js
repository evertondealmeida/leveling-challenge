module.exports = ({ cityService }) => ({
    execute: async id => {

        return await cityService.getById(id);
        
    }
});
