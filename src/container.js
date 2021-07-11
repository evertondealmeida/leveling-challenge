const {
    createContainer,
    asClass,
    asFunction,
    asValue,
    InjectionMode,
} = require('awilix');

const Server = require('./interfaces/http/Server');
const Router = require('./interfaces/http/Router');
const RouterRegister = require('./interfaces/http/presentation/RouterRegister');

const container = createContainer();

const configureContainer = config => {
    container
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
        )
        .register({
            server: asClass(Server).singleton(),
            router: asFunction(Router),
            routerRegister: asFunction(RouterRegister),
            container: asValue(container),
            config: asValue(config),
        });
        
    return container;
};

module.exports = { configureContainer, container };
