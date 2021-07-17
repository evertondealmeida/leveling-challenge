module.exports = () => ({
    buildPayload: ({result}) => {
        const payload = {
            docs: []
        };
        
        if(result){
            result.forEach(city => {
                payload.docs.push(city);
            });
        }

        return payload;

    }
});
