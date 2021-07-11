module.exports = ({ cityService }) => ({
    execute: async () => {

        return await cityService.getAll();
        
    }
});
