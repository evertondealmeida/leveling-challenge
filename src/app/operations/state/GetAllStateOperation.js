module.exports = ({ stateService, getAllStateFactory }) => ({
    execute: async ({ name, code }) => {
        
        const result = await stateService.getAll({ name, code });
        return getAllStateFactory.buildPayload({result});
    }
});
