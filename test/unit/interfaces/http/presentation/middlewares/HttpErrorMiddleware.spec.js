const { expect } = require('chai');

const HttpErrorMiddleware = require('src/interfaces/http/presentation/middlewares/HttpErrorMiddleware');
const HttpConstants = require('src/interfaces/http/presentation/constants/HttpConstants');

describe('Interfaces :: Http :: Middlewares :: HttpErrorMiddleware', () => {

    let ctx;

    describe('#HttpErrorMiddleware', () => {

        context('when middleware is call with stack error', () => {
            before(() => {
                ctx = {
                    container: {
                        cradle: {
                            logger: {
                                error: (err) => err
                            },
                            config: {
                                stackError: {
                                    isVisible: true
                                }
                            },
                            httpConstants: HttpConstants()
                        }
                    }
                };

            });

            it('return error', () => {

                const error = {
                    stack: 'error',
                    message: 'error',
                    errorCode: 400,
                    details: []
                };

                const req = {};

                const next = (err) => {
                    throw err;
                };

                const res = {
                    status(code) {
                        this.code = code;
                        return this;
                    },
                    json(value) {
                        this.value = value;
                        return this;
                    }
                };

                const data = HttpErrorMiddleware(ctx)(error, req, res, next);
                expect(data).not.to.empty();

            });

        });

        context('when middleware is call without stack error', () => {
            before(() => {
                ctx = {
                    container: {
                        cradle: {
                            logger: {
                                error: (err) => err
                            },
                            config: {},
                            httpConstants: HttpConstants()
                        }
                    }
                };

            });

            it('return error', () => {

                const error = {};

                const req = {};

                const next = (err) => err;

                const res = {
                    status(code) {
                        this.code = code;
                        return this;
                    },
                    json(value) {
                        this.value = value;
                        return this;
                    }
                };

                const data = HttpErrorMiddleware(ctx)(error, req, res, next);
                expect(data).not.to.empty();

            });

        });
    });
});

