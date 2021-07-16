const clear = require('src/utils/ClearObject');
const { expect } = require('chai');

describe('Infra :: SampleModel :: SampleModelRepository', () => {
    describe('#clear', () => {

        context('when passing null', () => {
            it('should not delete', done => {
                const query = {
                    value: null
                };

                clear(query);

                expect(query.value).to.exists;

                done();
            });
        });
        context('when passing boolean false', () => {
            it('should not delete', done => {
                const query = {
                    value: false
                };

                clear(query);

                expect(query.value).to.exists;

                done();
            });
        });
        context('when passing empty string', () => {
            it('should not delete', done => {
                const query = {
                    value: ''
                };

                clear(query);

                expect(query.value).to.exists;

                done();
            });
        });
        context('when passing undefined', () => {
            it('should delete', done => {
                const query = {
                    value: undefined
                };

                clear(query);

                expect(query.value).to.not.exists;

                done();
            });
        });

    });

});
