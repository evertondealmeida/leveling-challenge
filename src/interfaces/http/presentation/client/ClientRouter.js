module.exports = ({ container }) => {
    const router = container.cradle;

    return [
        {
            method: 'get',
            path: '/:id',
            validation: {
                params: router.clientSchema.params,
            },
            handler: router.clientController.getById
        },
        {
            method: 'get',
            path: '/name/:name',
            validation: {
                params: router.stateSchema.paramsName,
            },
            handler: router.clientController.getByName
        },
        {
            method: 'get',
            path: '/',
            validation: {
            },
            handler: router.clientController.getAll
        },
        {
            method: 'post',
            path: '/',
            validation: {
                body: router.clientSchema.body,
            },
            handler: router.clientController.create
        },
        {
            method: 'put',
            path: '/:id',
            validation: {
                body: router.clientSchema.body,
                params: router.clientSchema.params,
            },
            handler: router.clientController.update,
        },
        {
            method: 'delete',
            path: '/:id',
            validation: {
                params: router.clientSchema.params,
            },
            handler: router.clientController.delete
        }
    ];
};
