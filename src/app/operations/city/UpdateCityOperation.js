module.exports = ({ cityService }) => ({
    execute: async (oldCity, body) => {
        return await cityService.update(oldCity.id, body);    
    }
});
