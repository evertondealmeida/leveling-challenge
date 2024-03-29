const HttpConstants = require('../constants/HttpConstants')();

const HttpErrors = class extends Error {
    constructor(error, statusCode, errorCode, isOperational = false) {
        super(error);
        Error.captureStackTrace(this, this.constructor);
        this.message = error.message || HttpConstants.message.INTERNAL_SERVER_ERROR;
        this.details = error.errors || [];
        this.statusCode = statusCode || HttpConstants.code.INTERNAL_SERVER_ERROR;
        this.errorCode = errorCode || 0;
        this.isOperational = isOperational;
    }

    static badRequest(
        errors,
        message = HttpConstants.message.BAD_REQUEST,
        errorCode = '',
        statusCode = HttpConstants.code.BAD_REQUEST
    ) {
        return new HttpErrors(
            Object.assign({ message, errors }),
            statusCode,
            errorCode ? errorCode : statusCode,
            true
        );
    }

    static forbidden(
        errors,
        message = HttpConstants.message.FORBIDDEN,
        errorCode = '',
        statusCode = HttpConstants.code.FORBIDDEN
    ) {
        return new HttpErrors(
            Object.assign({ message, errors }),
            statusCode,
            errorCode ? errorCode : statusCode,
            true
        );
    }

    static notFound(
        message = HttpConstants.message.NOT_FOUND,
        key,
        parameter,
        statusCode = HttpConstants.code.NOT_FOUND,
    ) {
        const { code, errors } = this.handler(key, parameter);
        return new HttpErrors(
            Object.assign({ message, errors }),
            statusCode,
            code ? code : statusCode,
            true
        );
    }

    static internalServer(
        errors,
        message = HttpConstants.message.INTERNAL_SERVER_ERROR,
        errorCode = '',
        statusCode = HttpConstants.code.INTERNAL_SERVER_ERROR
    ) {
        return new HttpErrors(
            Object.assign({ message, errors }),
            statusCode,
            errorCode ? errorCode : statusCode,
            true
        );
    }

    static unprocessable(
        message = HttpConstants.message.UNPROCESSABLE_ENTITY,
        errorCode = '',
        statusCode = HttpConstants.code.UNPROCESSABLE_ENTITY,
        errors
    ) {
        return new HttpErrors(
            Object.assign({ message, errors }),
            statusCode,
            errorCode ? errorCode : statusCode,
            true
        );
    }

    static serviceUnavailable(
        message = HttpConstants.message.SERVICE_UNAVAILABLE,
        errorCode = '',
        statusCode = HttpConstants.code.SERVICE_UNAVAILABLE,
        errors
    ) {
        return new HttpErrors(
            Object.assign({ message, errors }),
            statusCode,
            errorCode ? errorCode : statusCode,
            true
        );
    }

    static conflict(
        message = HttpConstants.message.CONFLICT,
        errors,
        errorCode = '',
        statusCode = HttpConstants.code.CONFLICT,
    ) {
        return new HttpErrors(
            Object.assign({ message, errors }),
            statusCode,
            errorCode ? errorCode : statusCode,
            true
        );
    }

    static duplicateKeyError(
        message = HttpConstants.message.CONFLICT,
        errors,
        errorCode = '',
        statusCode = HttpConstants.code.CONFLICT,
    ) {
        return new HttpErrors(
            Object.assign({ message, errors }),
            statusCode,
            errorCode ? errorCode : statusCode,
            true
        );
    }

    static businessError(
        message = HttpConstants.message.UNPROCESSABLE_ENTITY,
        errors,
        errorCode = '',
        statusCode = HttpConstants.code.UNPROCESSABLE_ENTITY,
    ) {
        return new HttpErrors(
            Object.assign({ message, errors }),
            statusCode,
            errorCode ? errorCode : statusCode,
            true
        );
    }
};

module.exports = HttpErrors;
