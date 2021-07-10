const express = require('express');
const http = require('http');
const { scopePerRequest } = require('awilix-express');

class Server {
    constructor({ config, router, container }) {
        this.config = config;
        this.express = express();
        this.express.use(scopePerRequest(container));
        this.express.use(router);
    }

    start() {
        return new Promise(resolve => {
            http.createServer(this.express)
                .listen(this.config.web.port, () => {
                    resolve();
                });
        });
    }
}

module.exports = Server;
