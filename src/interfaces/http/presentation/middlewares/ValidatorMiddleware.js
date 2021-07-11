module.exports = () => ({

    validateContract: (validation) => (req, res, next) => {
        try {
            const schemaOptions = { abortEarly: false, convert: false, allowUnknown: false, stripUnknown: false };

            Object.keys(validation).forEach(validationKey => {
                if (validationKey == 'query') {
                    schemaOptions.convert = true;
                }
                const { error, value } = validation[validationKey].validate(req[validationKey], schemaOptions);

                if (error) {
                    throw error;
                }

                req[validationKey] = value;
            });

            return next();

        } catch (error) {
            next(error);
        }
    }
});