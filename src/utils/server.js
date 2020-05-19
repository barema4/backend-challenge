import express from 'express';
import cors from 'cors';
import compress from 'compression';
import helmet from 'helmet';
import bodyParser from 'body-parser';
import logger from 'morgan';
import swagger from 'swagger-ui-express';
import swaggerDoc from '../swagger/swagger';

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(helmet());
app.use(compress());
app.use(logger('dev'));
app.use('/docs', swagger.serve, swagger.setup(swaggerDoc, { explorer: true }));
export default app;
