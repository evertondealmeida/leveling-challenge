module.exports = () => ({
    buildPayload: ({client, city, state}) => {
        
        const diffDate =  Date.now() - client.birth_date;

        const payload = {
            id: client._id,
            name: client.name,
            cpf: client.cpf,
            age: Math.floor(diffDate / (1000 * 60 * 60 * 24 * 365.25)),
            gender: client.gender,
            city: city[0]._doc.name,
            state: state[0]._doc.uf
        };  
        return payload;

    }
});


