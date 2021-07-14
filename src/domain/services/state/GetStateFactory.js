module.exports = () => ({
    buildPayload: ({state, cities}) => {
 
        const payload = {
            id: state._id,
            name: state.name,
            uf: state.uf,
            code: state.code,
            cities: []
        };

        if(cities){
            cities.forEach(city => {
                payload.cities.push(city.name);
            });
        }

        return payload;

    }
});
