/* eslint-disable no-unused-vars */
let provider;

module.exports = providerConnection => {

    if (providerConnection && !provider)
        provider = providerConnection;

    return ({

        async clear(){
            const conn = await provider.connect();
            await conn.dropDatabase();
        },

        async query(entity, query) {
            const conn = await provider.connect();
            const result =  await conn.collections[entity].find(query);
            const dbElements = await result.toArray();
            const entityElements = dbElements.map(({ _id, schema_version, __v, ...entity }) => entity);
            return entityElements;
        },

    });
};
