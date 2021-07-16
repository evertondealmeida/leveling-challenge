const { expect } = require('chai');

const HttpErrors = require('src/interfaces/http/presentation/errors/HttpErrors');
const { code: httpCode, message: httpMessage } = require('src/interfaces/http/presentation/constants/HttpConstants')();

describe('Interfaces :: Http :: Errors :: HttpErrors', () => {
    describe('#constructor', () => {
        context('when initialize the http errors without params', () => {
            it('should return http error class', () => {
                const httpErrors = new HttpErrors({});
                expect(httpErrors).to.not.be.null();
            });
        });

        context('when initialize the http errors with params', () => {
            it('should return http error class', () => {
                const httpErrors = new HttpErrors({ message: 'msg', errors: ['error'] }, 200, 666);
                expect(httpErrors).to.not.be.null();
            });
        });
    });

    describe('#badRequest', () => {
        context('when call the function without error code', () => {
            it('should return expected http error', () => {
                const result = HttpErrors.badRequest();
                expect(result).to.have.property('message').that.is.eql(httpMessage.BAD_REQUEST);
                expect(result).to.have.property('statusCode').that.is.eql(httpCode.BAD_REQUEST);
            });
        });

        context('when call the function with error code', () => {
            it('should return expected http error', () => {
                const result = HttpErrors.badRequest(null, null, 666);
                expect(result).to.have.property('errorCode').that.is.eql(666);
            });
        });
    });

    describe('#forbidden', () => {
        context('when call the function without error code', () => {
            it('should return expected http error', () => {
                const result = HttpErrors.forbidden();
                expect(result).to.have.property('message').that.is.eql(httpMessage.FORBIDDEN);
                expect(result).to.have.property('statusCode').that.is.eql(httpCode.FORBIDDEN);
            });
        });

        context('when call the function with error code', () => {
            it('should return expected http error', () => {
                const result = HttpErrors.forbidden(null, null, 666);
                expect(result).to.have.property('errorCode').that.is.eql(666);
            });
        });
    });


    describe('#internalServer', () => {
        context('when call the function without error code', () => {
            it('should return expected http error', () => {
                const result = HttpErrors.internalServer();
                expect(result).to.have.property('message').that.is.eql(httpMessage.INTERNAL_SERVER_ERROR);
                expect(result).to.have.property('statusCode').that.is.eql(httpCode.INTERNAL_SERVER_ERROR);
            });
        });

        context('when call the function with error code', () => {
            it('should return expected http error', () => {
                const result = HttpErrors.internalServer(null, null, 666);
                expect(result).to.have.property('errorCode').that.is.eql(666);
            });
        });
    });

    describe('#unprocessable', () => {
        context('when call the function without error code', () => {
            it('should return expected http error', () => {
                const result = HttpErrors.unprocessable();
                expect(result).to.have.property('message').that.is.eql(httpMessage.UNPROCESSABLE_ENTITY);
                expect(result).to.have.property('statusCode').that.is.eql(httpCode.UNPROCESSABLE_ENTITY);
            });
        });

        context('when call the function with error code', () => {
            it('should return expected http error', () => {
                const result = HttpErrors.unprocessable(null, null, 666);
                expect(result).to.have.property('errorCode').that.is.eql(666);
            });
        });
    });
});

