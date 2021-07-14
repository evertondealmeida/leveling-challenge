module.exports = ({ stateService }) => ({
    execute: async body => {
        return await stateService.create(body);
    }
});
