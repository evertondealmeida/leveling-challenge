module.exports = ({ stateService }) => ({
    execute: async id => {

        return await stateService.getById(id);
        
    }
});
