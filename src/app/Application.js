const configLoader = require('config/configLoader');
const container = require('src/container');

class Application {
    constructor() {
        this.container = null;
    }

    async loadSetup() {
        const config = await configLoader.loadEnv();

        this.container = container.configureContainer(config);

        return this;
    }

    async start() {
        const { server } = this.container.cradle;

        await server.start();
    }
}

module.exports = Application;
