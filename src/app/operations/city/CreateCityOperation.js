module.exports = ({ cityService }) => ({
    execute: async body => {

        return await cityService.create(body);
        
    }
});
