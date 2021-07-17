const { expect } = require('chai');
const request = require('test/support/request');

describe('API :: DELETE /api/state/:id', () => {

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

    context('Delete state', async () => {
        it('Returns a state', async () => {
            const { body } = await request()
                .delete(`/api/states/${stateCreated._id}`)
                .expect(204);

            expect(body).to.be.empty();
        });
    });
});
