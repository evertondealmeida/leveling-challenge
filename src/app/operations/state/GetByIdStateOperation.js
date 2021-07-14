module.exports = ({ stateService, cityService, getStateFactory }) => ({
    execute: async id => {

        const state = await stateService.getById(id);
        const cities = await cityService.getAll({code_state: state.code});
       
        return getStateFactory.buildPayload({state, cities});
        
    }
});
