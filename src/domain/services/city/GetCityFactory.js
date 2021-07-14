module.exports = () => ({
    buildPayload: ({state, city, clients}) => {
 
        const payload = {
            id: city._id,
            name: city.name,
            state: state[0]._doc.uf,
            code: city.code,
            clients: []
        };

        if(clients){
            clients.forEach(client => {
                let info = {
                    name: client.name, 
                    cpf: client.cpf
                };
                payload.clients.push(info);
            });
        }

        return payload;

    }
});
