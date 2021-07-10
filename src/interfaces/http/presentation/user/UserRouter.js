module.exports = ({ container }) => {
    const ctx = container.cradle;

    return [
        {
            method: 'get',
            path: '/:id',
            validation: {
                params: ctx.userSchema.params,
            },
            handler: ctx.userController.getUser
        },
    ];
};
