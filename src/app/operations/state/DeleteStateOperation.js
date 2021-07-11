module.exports = ({ stateService }) => ({
    execute: async id => {

        return await stateService.delete(id);
        
    }
});
