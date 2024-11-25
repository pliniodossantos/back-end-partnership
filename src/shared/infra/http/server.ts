import 'reflect-metadata';
import 'express-async-errors';
import express from 'express';
import cors from 'cors';
import routes from './routes';
import ErrorHandleMiddleware from "../../middlewares/ErrorHandleMiddleware";
import { AppDataSource } from '../typeorm/data-source';
import { errors } from 'celebrate';
import routesAdm from './routes/adm';

AppDataSource.initialize()
    .then(async () => {
        const app = express();

        app.use(cors());
        app.use(express.json());
        app.use(routesAdm);
        app.use(routes);
        app.use(errors());
        app.use(ErrorHandleMiddleware.haddleError)

        console.log('connected database')
        app.listen(3333, () => {
            console.log('server starded on port 3333');
        });
    })
    .catch(error => {
        console.error("failed conect database")
    });

