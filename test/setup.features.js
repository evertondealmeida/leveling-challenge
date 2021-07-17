require('./setup.unit');

const Application = require('src/app/Application');
const request = require('./support/request');
const database = require('./support/database');

before(async() => {
    const application = new Application();
    await application.loadSetup();
    await application.start();
    const { providerConnection, server } = application.container.cradle;
    request(server);
    database(providerConnection);
});

beforeEach(async () => await database().clear());
