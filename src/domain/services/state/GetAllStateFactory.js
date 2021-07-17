module.exports = () => ({
    buildPayload: ({result}) => {
        const payload = {
            docs: []
        };
        
        if(result){
            result.forEach(state => {
                payload.docs.push(state);
            });
        }

        return payload;

    }
});
