import express, { Application } from 'express';
import serverConfig from './config/serverConfig';
import apiRouter from './routes';

const app: Application = express();

app.use('/api', apiRouter);

app.listen(serverConfig.PORT, () => {
    console.log(`Server started at *:${serverConfig.PORT}`);
    // console.log(serverConfig.REDIS_HOST, serverConfig.REDIS_PORT);
});