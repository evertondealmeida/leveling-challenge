module.exports = ({ clientService }) => ({
    execute: async id => {
        return await clientService.getById(id);
    }
});
