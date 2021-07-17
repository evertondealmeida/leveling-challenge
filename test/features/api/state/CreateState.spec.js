const { expect } = require('chai');
const request = require('test/support/request');

describe('API :: POST /api/state', () => {

    beforeEach(async () => {
        const state = {
            name: 'Rio Grande do Sul',
            uf: 'RS',
            code: 53
        };
     
        const { body } = await request()
            .post('/api/states/')
            .send(state);

        expect(body.id).to.be.exist();
        expect(body.name).to.be.exist();
        expect(body.uf).to.be.exist();
        expect(body.code).to.be.exist();
        expect(body).not.to.empty();
    });
});
