module.exports = ({ stateService }) => ({
    execute: async (id, body) => {
        return await stateService.update(id, body);    
    }
});
