
module.exports = ({ stateService }) => ({
    execute: async (oldState, newState) => {
        return await stateService.update(oldState.id, newState);
    }
});
