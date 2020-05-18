import express from 'express';
import cors from 'cors';
import compress from 'compression';
import helmet from 'helmet';
import bodyParser from 'body-parser';
import logger from 'morgan';

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(helmet());
app.use(compress());
app.use(logger('dev'));

export default app;
