module.exports = ({ container }) => {
    const router = container.cradle;

    return [
        {
            method: 'get',
            path: '/:id',
            validation: {
                params: router.citySchema.params,
            },
            handler: router.cityController.getById
        },
        {
            method: 'get',
            path: '/name/:name',
            validation: {
                params: router.stateSchema.paramsName,
            },
            handler: router.cityController.getByName
        },
        {
            method: 'get',
            path: '/',
            validation: {
            },
            handler: router.cityController.getAll
        },
        {
            method: 'post',
            path: '/',
            validation: {
                body: router.citySchema.body,
            },
            handler: router.cityController.create
        },
        {
            method: 'put',
            path: '/:id',
            validation: {
                body: router.citySchema.body,
                params: router.citySchema.params,
            },
            handler: router.cityController.update,
        },
        {
            method: 'delete',
            path: '/:id',
            validation: {
                params: router.stateSchema.params,
            },
            handler: router.cityController.delete
        }
    ];
};
