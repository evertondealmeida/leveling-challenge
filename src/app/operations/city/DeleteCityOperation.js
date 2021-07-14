module.exports = ({ cityService }) => ({
    execute: async id => {
        return await cityService.delete(id);
    }
});
