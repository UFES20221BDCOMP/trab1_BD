import { createConnection, getConnectionOptions } from 'typeorm';

interface IOptions {
    host: string;
}

getConnectionOptions().then(options => {
    const newOptions = options as IOptions;
    newOptions.host = 'process.env.REACT_APP_DOCKER_CONTAINER_NAME';
    createConnection({
        ...options,
    });
});