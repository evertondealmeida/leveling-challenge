module.exports = ({ clientService }) => ({
    execute: async body => {
        return await clientService.create(body);
    }
});
