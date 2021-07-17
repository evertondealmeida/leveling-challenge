const { expect } = require('chai');
const stateResponseSchema = require('test/support/schema/StateResponseSchema');
const request = require('test/support/request');

describe('API :: GET /api/state/:id', () => {

    let stateCreated;

    beforeEach(async () => {
        const state = {
            name: 'Rio Grande do Sul',
            uf: 'RS',
            code: 53
        };
     
        stateCreated = await request()
            .post('/api/states/')
            .send(state);

        stateCreated = stateCreated.body;
    });

    context('Get state', async () => {
        it('Returns a state', async () => {
            const { body } = await request()
                .get(`/api/states/${stateCreated._id}`)
                .expect(200);

            const { error } = stateResponseSchema.get.validate(body);
            expect(error).to.be.not.exist();
            expect(body).not.to.empty();
        });
    });

    context('Get state', async () => {
        it('Returns a state', async () => {
            const { body } = await request()
                .get(`/api/states/${stateCreated._id}`)
                .expect(200);

            const { error } = stateResponseSchema.get.validate(body);
            expect(error).to.be.not.exist();
            expect(body).not.to.empty();
        });
    });

    

});
