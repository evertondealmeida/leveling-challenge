module.exports = () => ({
    code: {
        OK: 200,
        CREATED: 201,
        BAD_REQUEST: 400,
        NOT_FOUND: 404,
        UNPROCESSABLE_ENTITY: 422,  
        INTERNAL_SERVER_ERROR: 500,
    },
    message: {

        OK: 'Ok',
        CREATED: 'Created',
        BAD_REQUEST: 'Bad Request',
        NOT_FOUND: 'Not Found',
        METHOD_NOT_ALLOWED: 'Method Not Allowed',
        UNPROCESSABLE_ENTITY: 'Unprocessable Entity',
        INTERNAL_SERVER_ERROR: 'Internal Server Error'
    }
});
