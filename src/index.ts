import express from 'express';
import serverCofig from './config/serverCofig';

const app = express();

app.listen(serverCofig.PORT, () => {
    console.log(`Server started at *:${serverCofig.PORT}`);
    console.log('wow')
})