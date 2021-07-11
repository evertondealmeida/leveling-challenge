module.exports = ({ stateService }) => ({
    execute: async name => {

        return await stateService.getByName({name});
        
    }
});
