const mongoose = require('mongoose');

class ProviderConnection {
    constructor({ config }) {
        this.config = config;
        this.connection = null;
        this.url = '';
        this.mongoose = mongoose;
    }

    _getMongoURL(config) {
        const userPass =
            config.db.username && config.db.password
                ? `${encodeURIComponent(
                    config.db.username
                )}:${encodeURIComponent(config.db.password)}@`
                : null;

        const url = config.db.servers.reduce(
            (prev, cur) => prev + cur + ',',
            `${config.db.dialect}://${userPass || ''}`
        );
        const finalUrl = `${url.substr(0, url.length - 1)}/${config.db.database}`;

        return finalUrl;
    }

    _getConnOptions(config) {
        const options = config.db.options || {};
        options.useNewUrlParser = true;
        options.useFindAndModify = false;
        options.useCreateIndex = true;
        return options;
    }

    async connect() {
        if (this.connection)
            return this.connection;

        const opts = this._getConnOptions(this.config);
        this.url = this._getMongoURL(this.config);

        try {
            this.connection = await this.mongoose.createConnection(this.url, opts );

            console.log('Mongodb connection stablished');

            return this.connection;
        } catch (err) {
            console.log('Error on connect Mongodb');

            throw err;
        }
    }
}

module.exports = ProviderConnection;
