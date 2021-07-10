const {
    createContainer,
    asClass,
    asFunction,
    asValue,
    InjectionMode,
} = require('awilix');

const Server = require('./interfaces/http/Server');
const Router = require('./interfaces/http/Router');

const container = createContainer();

const configureContainer = config => {
    container
        .register({
            server: asClass(Server).singleton(),
            router: asFunction(Router),
            container: asValue(container),
            config: asValue(config),
        })
        .loadModules(
            [
                'src/app/operations/**/*.js',
                'src/app/services/**/*.js',
                'src/domain/services/**/*.js',
                'src/domain/schemas/**/*.js',
                'src/interfaces/http/errors/**/*.js',
                'src/interfaces/http/constants/**/*.js',
                'src/interfaces/http/middlewares/**/*.js',
                'src/interfaces/http/presentation/**/*.js',
            ],
            {
                formatName: 'camelCase',
                resolverOptions: {
                    injectionMode: InjectionMode.PROXY
                }
            }
        );
    return container;
};

module.exports = { configureContainer, container };
