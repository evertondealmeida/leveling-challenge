module.exports = () => ({
    buildPayload: ({result}) => {
        const payload = {
            docs: []
        };
        
        if(result){
            result.forEach(client => {
                payload.docs.push(client);
            });
        }

        return payload;

    }
});
