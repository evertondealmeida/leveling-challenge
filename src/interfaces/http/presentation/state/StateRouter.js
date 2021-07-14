module.exports = ({ container }) => {
    const router = container.cradle;

    return [
        {
            method: 'get',
            path: '/:id',
            validation: {
                params: router.stateSchema.params,
            },
            handler: router.stateController.getById
        },
        {
            method: 'get',
            path: '/',
            validation: {
                query : router.stateSchema.query
            },
            handler: router.stateController.getAll
        },
        {
            method: 'post',
            path: '/',
            validation: {
                body: router.stateSchema.body,
            },
            handler: router.stateController.create
        },
        {
            method: 'put',
            path: '/:id',
            validation: {
                body: router.stateSchema.body,
                params: router.stateSchema.params,
            },
            handler: router.stateController.update,
        },
        {
            method: 'delete',
            path: '/:id',
            validation: {
                params: router.stateSchema.params,
            },
            handler: router.stateController.delete
        }
    ];
};
