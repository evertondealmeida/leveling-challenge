const { expect } = require('chai');

const LoggerMiddleware = require('src/interfaces/http/middlewares/LoggerMiddleware');

describe('Interfaces :: Http :: Middlewares :: LoggerMiddleware', () => {

    let ctx;

    describe('#HttpErrorMiddleware', () => {

        context('when middleware is call with stack error', () => {
            before(() => {
                ctx = {
                    logger: {
                        error: (err) => err
                    }
                };
            });

            it('return info logger', () => {
                const data = LoggerMiddleware(ctx);
                expect(data).to.be.a('function');
            });
        });
    });
});

